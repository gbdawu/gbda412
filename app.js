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


const { createApp, ref, onMounted, onUnmounted } = Vue;
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
        // team 1
        id: 1,
        title: "There is more to Stratford than 125 St.Patrick St",
        authors: "Matthew & Jennifer",
        description: "You will embark on an auditory walk that showcases different spots near the Stratford School of Interactive Business and Design. The purpose of this walk is to showcase what there is outside of the perimeter of the University of Waterloo's Stratford Satellite campus.",
        qr: "images/soundwalk/qr-codes/1.png",
        link: "https://explore.echoes.xyz/collections/XIQKskbUTX3SjICH",
        listeners: [],
      },

      {
        // team 2
        id: 2,
        title: "Scrapbook of Stratford",
        authors: "Sydney & Sakeena",
        description: "Walk Stratford near the University of Waterloo Stratford Campus with our sonic scrapbook as your guide. It unfolds page by page through the spots that meant the most to us so far, pairing simple facts with the sounds we associate with each place. Stops: Stratford Public Library, Shakespearean Gardens, Dancing Waters Boutique, The Boathouse Stratford, Copperlight Event Venue, Blowes Stationary & Office Supplies. Headphones recommended.",
        qr: "images/soundwalk/qr-codes/2.png",
        link: "https://explore.echoes.xyz/collections/UF4OTLWR6ewN9y1g",
        listeners: [],
      },

      {
        // team 3
        id: 3,
        title: "Day-in-a-life of a Stratford student",
        authors: "Caleb & Justin",
        description: "This soundwalk captures the everyday experiences of GBDA students through familiar yet often unnoticed sounds around campus. From footsteps and ambient chatter to the soft rustle of bean bags, it turns routine moments into meaningful soundmarks. Inspired by Schafer and McCartney’s soundscape theories, the walk encourages listeners to appreciate the overlooked textures of student life and reflect on how sound shapes shared spaces and memories.",
        qr: "images/soundwalk/qr-codes/3.png",
        link: "https://explore.echoes.xyz/collections/cHI8z9ooqFMuWpG2",
        listeners: [],
      },

      {
        // team 4
        id: 4,
        title: "A Walk Around The Historic City of Stratford",
        authors: "Owen & Aadya",
        description: "Join us on this guided tour around the historic City of Stratford, and the streets surrounding the University of Waterloo's Stratford School of Interaction Design and Business",
        qr: "images/soundwalk/qr-codes/4.png",
        link: "https://explore.echoes.xyz/collections/EUNQj8JC55c0qzVg",
        listeners: [],
      },

      // {
      //   // team 5
      //   id: 5,
      //   title: "",
      //   authors: "",
      //   description: "",
      //   qr: "images/soundwalk/qr-codes/5.png",
      //   link: "",
      //   listeners: [],
      // },

      {
        // team 6
        id: 6,
        title: "Echoes of Stratford: A Soundwalk Through History",
        authors: "Afreen & Hannah",
        description: "Step into the heart of Stratford, Ontario, and discover how this small railway town transformed into an international hub for Shakespearean theatre. This soundwalk takes you through historic sites like the Avon River, the Festival Theatre, and the Shakespeare Gardens, weaving together stories of resilience, culture, and performance. With archival voices, theatrical sounds, and immersive narration, you’ll experience Stratford’s past and present in a new way, where history speaks and Shakespeare’s legacy lives on.",
        qr: "images/soundwalk/qr-codes/6.png",
        link: "https://explore.echoes.xyz/collections/hyRe8I7ECI4usdmH",
        listeners: [],
      },


      {
        // team 7
        id: 7,
        title: "The Chocolate Road",
        authors: "Anne & Kim",
        description: "Welcome to the decadent part of Stratford! This time, we get to feel like kids in a candy shop...but now, we have adult money. Embark on a delicious, rich, smooth, fruity, sweet...journey with us while we recount our experiences in all the chocolate-related shops in Stratford. Be sure to turn up your volume to get the most out of the audio!",
        qr: "images/soundwalk/qr-codes/7.png",
        link: "https://explore.echoes.xyz/collections/kfnPdHEB73O4XCpx",
        listeners: [],
      },


      {
        // team 8
        id: 8,
        title: "Sounds of Stratford",
        authors: "Emma & Cally",
        description: "This soundwalk weaves together multiple personas and their emotional connections to Stratford’s spaces. Through layered field recordings, AI-generated narration, and ambient soundscapes, it explores how sound shapes memory, feeling, and identity. Drawing on ideas from Cox and Hope, the walk transforms everyday locations into shared sonic stories, inviting listeners to experience Stratford not just as a place to hear, but as one to feel through sound.",
        qr: "images/soundwalk/qr-codes/8.png",
        link: "https://explore.echoes.xyz/collections/siEnQmw4nHNRiejQ",
        listeners: [],
      },


      {
        // team 9
        id: 9,
        title: "Walks, Talks, and Cafes",
        authors: "Saima & Chelsea",
        description: "This soundwalk explores Stratford’s café culture as a reflection of community and everyday life. Through recordings of door chimes, chatter, and the soft hum of activity, listeners are immersed in the city’s “third spaces” — places where people gather and connect. Blending artistic listening with cultural reflection, the walk invites participants to experience how sound shapes belonging, social interaction, and the character of Stratford.",
        qr: "images/soundwalk/qr-codes/9.png",
        link: "https://explore.echoes.xyz/collections/5qTeuj9iZ9i5qVdn",
        listeners: [],
      },


      {
        // team 10
        id: 10,
        title: "Framing Stratford Through Sound",
        authors: "Monia & Melanie",
        description: "This soundwalk invites participants to explore Stratford through both listening and looking. Blending field and sourced recordings, it guides walkers to capture photographs inspired by sound — from theatre laughter to garden birdsong. Linking sonic and visual perception, the experience encourages mindful attention to rhythm, movement, and stillness. By connecting soundscape studies with creative photography, the walk turns everyday spaces into moments of sensory discovery and reflection.",
        qr: "images/soundwalk/qr-codes/10.png",
        link: "https://explore.echoes.xyz/collections/cPEXYxXdWWupi20L",
        listeners: [],
      },

      {
        // team 11
        id: 11,
        title: "Stratford Sounds of Commerce",
        authors: "Mary-Ann & Dawson",
        description: "Take a stroll through Stratford’s downtown and discover a world of creativity and charm, from handmade art and cozy bookshelves to playful curiosities and timeless design. Each stop tells its own story, turning the walk into a celebration of local craftsmanship, imagination, and heart.",
        qr: "images/soundwalk/qr-codes/11.png",
        link: "https://explore.echoes.xyz/collections/w8DdPBZxtPwmpVPz",
        listeners: [],
      },

      {
        // team 12
        id: 12,
        title: "Eateries in Stratford",
        authors: "Jessica & Susanna",
        description: "This soundwalk invites listeners to explore Stratford’s local restaurants through original field recordings and narration. Capturing the ambient sounds, atmosphere, and stories of eateries that welcome Waterloo students, it highlights how food spaces shape student life and community. Blending sensory listening with commentary, the walk connects everyday dining experiences to Stratford’s social and cultural fabric, encouraging visitors to savor both the sounds and spirit of the city.",
        qr: "images/soundwalk/qr-codes/12.png",
        link: "https://explore.echoes.xyz/collections/CoXtvRQVFOo6kAJv",
        listeners: [],
      },

      {
        // team 13
        id: 13,
        title: "Echoes of Stratford",
        authors: "Elizabeth & Kamila",
        description: "This soundwalk takes listeners on a journey through Stratford’s most distinctive spaces, from the creative energy of the Stratford School to the cultural legacy of the Avon Theatre and the everyday charm of local spots like the Green Room vintage shop and Alley Cat Café. Using a mix of our own recordings, archival theatre clips, and carefully chosen background music, the walk layers environmental sounds with subtle details to create an immersive portrait of the city. The result is an experience that highlights Stratford’s history, culture, and atmosphere while drawing attention to the often-overlooked sounds that define a place.",
        qr: "images/soundwalk/qr-codes/13.png",
        link: "https://explore.echoes.xyz/collections/6lmBU2Y9Zchadhiu",
        listeners: [],
      },

      // {
      //   // team 14
      //   id: 14,
      //   title: "",
      //   authors: "",
      //   description: "",
      //   qr: "images/soundwalk/qr-codes/14.png",
      //   link: "",
      //   listeners: [],
      // },


      {
        // team 15
        id: 15,
        title: "Student Perspectives on Stratford",
        authors: "Isabelle & Hanson",
        description: "This soundwalk reimagines Stratford through the perspective of students, highlighting overlooked locations and vibrant everyday sounds. Field recordings capture birds, footsteps, conversations, and live music, creating an authentic sonic portrait of the city. By curating these experiences, the walk challenges perceptions of Stratford as lacking energy, showing how sound can reveal hidden life and community. Listeners are invited to engage with the city’s environment in new, reflective ways.",
        qr: "images/soundwalk/qr-codes/15.png",
        link: "https://explore.echoes.xyz/collections/foNSvJepUUI57IEX",
        listeners: [],
      },

      {
        // team 16
        id: 16,
        title: "Stratford: Echoes of Memory and the Present",
        authors: "Shivala & Tara",
        description: "This soundwalk moves through Stratford’s familiar spaces such as the campus, library, courthouse, and favorite local spots like Jen and Larry’s, Balzac’s, and Sirkel Foods. It also pauses at Memorial Gardens for reflection. Each stop highlights the everyday sounds of footsteps, chatter, and traffic, layering the present moment with echoes of memory. The sound of an ice cream shop may spark nostalgia while the courthouse grounds remind us of history carried into the now. By blending past associations with live listening, this walk transforms ordinary places into a shared story of Stratford where memory and presence overlap in sound.",
        qr: "images/soundwalk/qr-codes/16.png",
        link: "https://explore.echoes.xyz/collections/H0Rf9RB3YbCehqp1 ",
        listeners: [],
      },

      {
        // team 17
        id: 17,
        title: "Home Away from Home",
        authors: "Lila & Emily",
        description: "This soundwalk explores Stratford through the comforting sounds of familiarity and belonging. Blending field recordings with AI narration, it guides listeners through everyday spaces like cafés, schools, and lakesides that evoke nostalgia and connection. Inspired by Schafer and McCartney, the walk treats sound as emotional memory—revealing how rhythm, voice, and place create a shared sense of home for both longtime residents and newcomers alike.",
        qr: "images/soundwalk/qr-codes/17.png",
        link: "https://explore.echoes.xyz/collections/qLFFkgYscdiZIrg8",
        listeners: [],
      },

      {
        // team 18
        id: 18,
        title: "Stratford: Art meets Nature in History and Harmony",
        authors: "Joy & Ella",
        description: "This soundwalk invites listeners to explore Stratford’s cultural and natural landmarks—from the Shakespearean Gardens to the Festival Theatre—through the interplay of art, environment, and community. Using field recordings, ambient textures, and archival sounds, it captures how Stratford’s identity resonates through both heritage and everyday life. Inspired by Schafer’s ideas on soundscape and acoustic ecology, it transforms familiar spaces into a living performance of place and memory.",
        qr: "images/soundwalk/qr-codes/18.png",
        link: "https://explore.echoes.xyz/collections/R9fDBKGBSPhCVjeO ",
        listeners: [],
      },

      {
        // team 19
        id: 19,
        title: "Nai & Lydia",
        authors: "Breathing Through Stratford",
        description: "This soundwalk invites students to step away from the stress of school and rediscover moments of calm in Stratford’s hidden gems. Through guided reflections, nature sounds, and mindful pauses, it encourages slowing down, breathing deeply, and finding balance in everyday spaces.",
        qr: "images/soundwalk/qr-codes/19.png",
        link: "https://explore.echoes.xyz/collections/8HTlnQNr0OrrLF8d",
        listeners: [],
      },

      {
        // team 20
        id: 20,
        title: "Rhythms of Stratford: Urban Life in Motion",
        authors: "Eileen & Sophie",
        description: "This soundwalk explores the rhythms of everyday life and social interactions in downtown Stratford. Drawing on the spatial narrative potential of sound, the seven selected locations trace a progression from public social encounters in the city center to intimate experiences of local culture, and finally to routine patterns of daily activity. Each site offers a distinct perspective on urban life. Through this walk, participants will experience how sound shapes the town’s culture and daily interactions. The textures of conversation, music, café atmospheres, skateboard movements, and the hum of buses all reveal how acoustic environments construct the lived reality of Stratford.",
        qr: "images/soundwalk/qr-codes/20.png",
        link: "https://explore.echoes.xyz/collections/9wdesnHMXLfDgOBd",
        listeners: [],
      },

      {
        // team 21
        id: 21,
        title: "Serenity in Stratford",
        authors: "Maleeha & Mai",
        description: "Welcome to Stratford 🏫🌲! This soundwalk follows the path from the lively energy of Market Square down to the quiet calm of Lake Victoria. As you listen, notice how the sounds slowly shift from people and music to the natural ambience of water and birds",
        qr: "images/soundwalk/qr-codes/21.png",
        link: "https://explore.echoes.xyz/collections/P0sqTd3XJpsURPrv",
        listeners: [],
      },

      {
        // team 22
        id: 22,
        title: "Musician in Stratford",
        authors: "Casslie & Michelle",
        description: "A soundwalk exploring the everyday life of a GBDA student through a musical lens, while celebrating Stratford’s vibrant music culture.",
        qr: "images/soundwalk/qr-codes/22.png",
        link: "https://explore.echoes.xyz/collections/J901FjQacPZYMJ6f",
        listeners: [],
      },


      {
        // team 23
        id: 23,
        title: "Listening to Stratford: Layers, Frames, and Everyday Rhythms",
        authors: "Erin & Zeaj",
        description: "This soundwalk intertwines two creative perspectives: one focused on sonic texture, the other on framing space through the sound of a camera shutter. Moving through cafés, gardens, and public spaces, it captures Stratford’s rhythm as both ecology and imagination. Field recordings and theoretical influences—from Schafer to Best—guide an embodied approach to listening, where sound becomes vibration, memory, and movement through place.",
        qr: "images/soundwalk/qr-codes/23.png",
        link: "https://explore.echoes.xyz/collections/vWkSx8tUfKafDdHx",
        listeners: [],
      },


      {
        // team 24
        id: 24,
        title: "Anxiety in GBDA",
        authors: "Tyler & Kaelyn",
        description: "This soundwalk translates the emotional and physical sensations of anxiety into sound, tracing the experience of a student’s first day at university. Through layered recordings of heartbeats, breath, and environmental noise, it builds a narrative of unease and anticipation. Drawing on McCartney’s and Hope’s writings on soundwalking and locative listening, the project transforms everyday spaces into an immersive reflection on emotion, embodiment, and belonging.",
        qr: "images/soundwalk/qr-codes/24.png",
        link: "https://explore.echoes.xyz/collections/ZmCXNpjDUr2TNmqh",
        listeners: [],
      },


      {
        // team 25
        id: 25,
        title: "Stratford: Echoes Between Tracks and Stars",
        authors: "Saybe & Nirthika",
        description: "Welcome to Nirthika and Saybe's soundwalk Stratford: Echoes Between Tracks and Stars. This walk consists of 5 locations. In which order is important to preserve the flow of the story! 1. Grand Trunk Railway - where the journey begins. 2. The Starlight 3. The Spa Near The Tracks 4. Bru Garden 5. Movies Under The Stars - where the journey ends. You will be transported into a day filled with history, relaxation, culinary delight, and nostalgia. We advise you to jot down one word that resonates with you at each location, so please listen closely and take your time.",
        qr: "images/soundwalk/qr-codes/25.png",
        link: "https://explore.echoes.xyz/collections/nywTb9xJVGVeZtsA",
        listeners: [],
      },


      // {
      //   // team 26
      //   id: 26,
      //   title: "",
      //   authors: "",
      //   description: "",
      //   qr: "images/soundwalk/qr-codes/26.png",
      //   link: "",
      //   listeners: [],
      // },


      // {
      //   // team 27
      //   id: 27,
      //   title: "",
      //   authors: "",
      //   description: "",
      //   qr: "images/soundwalk/qr-codes/27.png",
      //   link: "",
      //   listeners: [],
      // },

      {
        // team 28
        id: 28,
        title: "Theatre & Media Soundwalk",
        authors: "Tiffany & Sophie",
        description: "This soundwalk traces Stratford’s rich theatrical history alongside its emerging digital media scene. From the historic Avon Theatre to the contemporary Stratford School of Interaction Design campus, listeners experience field recordings, archival audio, and narration that highlight performances, community spaces, and student activity. By blending past and present, the walk reveals how Stratford’s artistic and technological landscapes intersect, inviting participants to engage with the evolving cultural life and sonic identity of the city.",
        qr: "images/soundwalk/qr-codes/28.png",
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

      // Disable button while processing (add a loading state if needed)
      const trimmedName = name.trim();
      newListenerName.value[soundwalkId] = ""; // Clear immediately

      const { error } = await supabaseClient.from("listeners").insert([
        { soundwalk_id: soundwalkId, listener_name: trimmedName },
      ]);
      if (error) {
        console.error("Error adding listener:", error);
        snackbarText.value = "Error adding name.";
        newListenerName.value[soundwalkId] = trimmedName; // Restore on error

      } else {
        snackbarText.value = "Name added!";
        // newListenerName.value[soundwalkId] = "";
        // await loadListeners();
      }
      snackbar.value = true;
    }

    // Subscribe to supabaseClient realtime updates
    //     async function subscribeRealtime() {
    //         supabaseClient
    //             .channel("realtime-listeners")
    //             .on("postgres_changes", { event: "INSERT", schema: "public", table: "listeners" },
    //                   (payload) => {
    //     console.log('New listener:', payload.new);
    //     loadListeners();  // refresh your local soundwalks array
    //   }
    // )
    //             .subscribe();
    //     }

    async function subscribeRealtime() {
      // Create a realtime channel for the 'listeners' table
      const channel = supabaseClient.channel("public:listeners");

      channel.on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "listeners" },
        (payload) => {
          console.log("New listener:", payload.new);

          // Find the matching soundwalk and push the new listener
          const sw = soundwalks.value.find(
            (s) => s.id === payload.new.soundwalk_id
          );
          if (sw) {
            sw.listeners.push(payload.new.listener_name);
          }

          // Optional: show snackbar
          snackbarText.value = `New listener added: ${payload.new.listener_name}`;
          snackbar.value = true;
        }
      );

      // Subscribe to the channel
      await channel.subscribe();
    }

    onMounted(() => {
      loadListeners();
      subscribeRealtime();
    });

    // Add this if you want to clean up when component unmounts
    onUnmounted(() => {
      supabaseClient.removeAllChannels();
    });

    return { soundwalks, newListenerName, addListener, snackbar, snackbarText };
  },

  template: `
    <v-app>
      <v-app-bar color="deep-orange-lighten-3" prominent>
        <v-app-bar-title>🎧 Soundwalk Exhibition</v-app-bar-title>
      </v-app-bar>

      <v-main class="pa-6">
        <div   class="instructions mt-15">
          <h3>Instructions:</h3>
          <ol>
            <li>With your soundwalk partner, explore the other teams’ soundwalks on this webpage and choose one to listen to.</li>
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
                      <h3 class="soundwalkHeading" class="mb-2">{{ sw.title }}</h3>
                      <p class="mb-2"><strong>Authors:</strong> {{ sw.authors }}</p>
                      <p>{{ sw.description }}</p>
                    </v-col>

                    <!-- Right side: QR + link -->
                    <v-col cols="5" class="text-center">
                      <img :src="sw.qr" alt="QR code" class="qr-img mb-2" />
                      <div>
                        <v-btn class="echoes-btn" color="#fff3e0" variant="flat" :href="sw.link" target="_blank">
                          Click to open in Echoes
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
                      color="deep-orange-lighten-1"
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
