// ================================
// Vue + Vuetify + Supabase setup
// ================================

// STEP 1 — Create a Supabase project at https://supabase.com/
// STEP 2 — In your Supabase dashboard:
//   - Create a table called "listeners" with columns:
//       id (int8, PK, autoincrement)
//       soundwalk_id (int8)
//       listener_name (text)
//       created_at (timestamp, default: now())
//   - Go to Table Editor > "listeners" > enable Row Level Security (RLS)
//   - Create a policy: “Enable insert and read access for all users”
//       → for select & insert, use: `true`
//   - Copy your project URL and public anon key
// STEP 3 — Paste them below:

const SUPABASE_URL = "https://mjosyfkfbjycjovhiuyx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qb3N5ZmtmYmp5Y2pvdmhpdXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NjY2NjUsImV4cCI6MjA3NTE0MjY2NX0.9EEty2FYmE23SwDNc-7-OTua3sM6FSTXQVVpfXzi3EY";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



// ================================
// Vue Application
// ================================


const { createApp, ref, onMounted } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify({
    theme: {
        defaultTheme: "light",
    },
});

createApp({
    setup() {
        const soundwalks = ref([
            // 👇 Fill in your students' soundwalk info here
            {
                id: 1,
                title: "Walks, Talks, and Cafes",
                authors: "Maya & Jordan",
                description: "This soundwalk explores Stratford’s café culture as a reflection of community and everyday life. Through recordings of door chimes, chatter, and the soft hum of activity, listeners are immersed in the city’s “third spaces” — places where people gather and connect. Blending artistic listening with cultural reflection, the walk invites participants to experience how sound shapes belonging, social interaction, and the character of Stratford.",
                qr: "images/soundwalk/qr-codes/1.png",
                link: "https://explore.echoes.xyz/collections/5qTeuj9iZ9i5qVdn",
                listeners: [],
            },
            {
                id: 2,
                title: "Eateries in Stratford",
                authors: "Jessica & Susanna",
                description: "This soundwalk invites listeners to explore Stratford’s local restaurants through original field recordings and narration. Capturing the ambient sounds, atmosphere, and stories of eateries that welcome Waterloo students, it highlights how food spaces shape student life and community. Blending sensory listening with commentary, the walk connects everyday dining experiences to Stratford’s social and cultural fabric, encouraging visitors to savor both the sounds and spirit of the city.",
                qr: "images/soundwalk/qr-codes/2.png",
                link: "https://explore.echoes.xyz/collections/CoXtvRQVFOo6kAJv",
                listeners: [],
            },

            {
                id: 3,
                title: "Echoes of Stratford",
                authors: "Elizabeth & Kamila",
                description: "This soundwalk takes listeners on a journey through Stratford’s most distinctive spaces, from the creative energy of the Stratford School to the cultural legacy of the Avon Theatre and the everyday charm of local spots like the Green Room vintage shop and Alley Cat Café. Using a mix of our own recordings, archival theatre clips, and carefully chosen background music, the walk layers environmental sounds with subtle details to create an immersive portrait of the city. The result is an experience that highlights Stratford’s history, culture, and atmosphere while drawing attention to the often-overlooked sounds that define a place.",
                qr: "images/soundwalk/qr-codes/3.png",
                link: "https://explore.echoes.xyz/collections/6lmBU2Y9Zchadhiu",
                listeners: [],
            },


            {
                id: 4,
                title: "Student Perspectives on Stratford",
                authors: "Isabelle & Hanson",
                description: "This soundwalk reimagines Stratford through the perspective of students, highlighting overlooked locations and vibrant everyday sounds. Field recordings capture birds, footsteps, conversations, and live music, creating an authentic sonic portrait of the city. By curating these experiences, the walk challenges perceptions of Stratford as lacking energy, showing how sound can reveal hidden life and community. Listeners are invited to engage with the city’s environment in new, reflective ways.",
                qr: "images/soundwalk/qr-codes/4.png",
                link: "https://explore.echoes.xyz/collections/foNSvJepUUI57IEX",
                listeners: [],
            },

             {
                id: 5,
                title: "Theatre & Media Soundwalk",
                authors: "Tiffany & Sophie",
                description: "This soundwalk traces Stratford’s rich theatrical history alongside its emerging digital media scene. From the historic Avon Theatre to the contemporary Stratford School of Interaction Design campus, listeners experience field recordings, archival audio, and narration that highlight performances, community spaces, and student activity. By blending past and present, the walk reveals how Stratford’s artistic and technological landscapes intersect, inviting participants to engage with the evolving cultural life and sonic identity of the city.",
                qr: "images/soundwalk/qr-codes/5.png",
                link: "https://explore.echoes.xyz/collections/KV62sESg6dqbr62h",
                listeners: [],
            },

        ]);

        const newListenerName = ref({});
        const snackbar = ref(false);
        const snackbarText = ref("");

        // Fetch listeners from supabaseClient
        async function loadListeners() {
            const { data, error } = await supabaseClient.from("listeners").select("*");
            if (error) console.error("Error fetching listeners:", error);

            // Group listeners by soundwalk_id
            soundwalks.value.forEach((sw) => {
                sw.listeners = data
                    ? data.filter((l) => l.soundwalk_id === sw.id).map((l) => l.listener_name)
                    : [];
            });
        }

        // Add a listener name
        async function addListener(soundwalkId) {
            const name = newListenerName.value[soundwalkId];
            if (!name || !name.trim()) return;

            const { error } = await supabaseClient.from("listeners").insert([
                { soundwalk_id: soundwalkId, listener_name: name.trim() },
            ]);
            if (error) {
                console.error("Error adding listener:", error);
                snackbarText.value = "Error adding name.";
            } else {
                snackbarText.value = "Name added!";
                newListenerName.value[soundwalkId] = "";
                await loadListeners();
            }
            snackbar.value = true;
        }

        // Subscribe to supabaseClient realtime updates
        async function subscribeRealtime() {
            supabaseClient
                .channel("realtime-listeners")
                .on("postgres_changes", { event: "INSERT", schema: "public", table: "listeners" }, () => {
                    loadListeners();
                })
                .subscribe();
        }

        onMounted(() => {
            loadListeners();
            subscribeRealtime();
        });

        return { soundwalks, newListenerName, addListener, snackbar, snackbarText };
    },

    template: `
    <v-app>
      <v-app-bar color="deep-orange-lighten-3" prominent>
        <v-app-bar-title>🎧 Soundwalk Exhibition</v-app-bar-title>
      </v-app-bar>

      <v-main class="pa-6">
        <div class="instructions">
          <h3>Instructions:</h3>
          <ol>
            <li>With your soundwalk partner, explore the other teams’ soundwalks on the following webpage and choose one to listen to.</li>
            <li>Register your participation by signing your team members’ names under the “Listened by” section on the chosen soundwalk.</li>
            <li>Scan the QR code for your selected soundwalk and go out to listen to it.</li>
            <li>After you finish listening to your first soundwalk, repeat steps 1–3 to select and listen to a second one.</li>
          </ol>
        </div>

        <v-container>
          <v-row>
            <v-col
              v-for="sw in soundwalks"
              :key="sw.id"
              cols="12"
              md="6"
              class="soundwalk-card"
            >
              <v-card elevation="4">
                <v-card-text>
                  <v-row>
                    <!-- Left side: info -->
                    <v-col cols="7">
                      <h3>{{ sw.title }}</h3>
                      <p><strong>Authors:</strong> {{ sw.authors }}</p>
                      <p>{{ sw.description }}</p>
                    </v-col>

                    <!-- Right side: QR + link -->
                    <v-col cols="5" class="text-center">
                      <img :src="sw.qr" alt="QR code" class="qr-img mb-2" />
                      <div>
                        <v-btn color="deep-orange-lighten-2" variant="flat" :href="sw.link" target="_blank">
                          Open in Echoes
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>

                <!-- Listeners -->
                <v-divider></v-divider>
                <v-card-text>
                  <strong>Listened by:</strong>
                  <div v-if="sw.listeners.length">
                    <v-chip
                      v-for="(name, index) in sw.listeners"
                      :key="index"
                      class="ma-1"
                      color="deep-orange-lighten-4"
                    >
                      {{ name }}
                    </v-chip>
                  </div>
                  <div v-else>
                    <em>No listeners yet.</em>
                  </div>

                  <v-text-field
                    v-model="newListenerName[sw.id]"
                    label="Your team name"
                    variant="outlined"
                    density="compact"
                    hide-details
                    class="mt-4"
                  ></v-text-field>

                  <v-btn
                    color="deep-orange"
                    variant="tonal"
                    size="small"
                    @click="addListener(sw.id)"
                  >
                    Add Name
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-snackbar v-model="snackbar" color="deep-orange-accent-2">
        {{ snackbarText }}
      </v-snackbar>
    </v-app>
  `,
}).use(vuetify).mount("#app");
