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
                title: "Who Is the River For? Listening forBelonging at Lake Victoria",
                author: "Lynette Shen",
                description: "This soundwalk begins at the Festival Theatre, passes through its gardens to Lake Victoria and Tom Patterson Island, and ends on the downtown street near Stratford School. It asks one question: who is this river for? To festival visitors, the calm water is scenery between shows.To residents, it is the background of a walk home. I am neither. As a student who came here to study, I first heard the river as a postcard. The walk retraces how that listening changed and asks listeners which kind of listener they are.",
                qr: "images/qr-codes-fall-2026/1.png",
                link: "https://explore.echoes.xyz/collections/OSPgA2sQvflGVYmE",
                listeners: [],
            },

            {
                // team 2
                id: 2,
                title: "Two Stratfords: Who Is This Town Tuned For?",
                author: "Moosa Malik",
                description: "Stratford sounds different depending on who you are and what brings you here. For visitors, its identity is shaped by theatre, restaurants, busy patios and the image of Shakespeare. For those who live and study here, the town also exists in quieter routines: typing in a study room, repairing a bicycle, buying coffee or walking home. Two Stratfords is a soundwalk that moves between these experiences, asking whose sounds define a place and whose are pushed into the background.",
                qr: "images/qr-codes-fall-2026/2.png",
                link: "https://explore.echoes.xyz/collections/307c72YCXIlV8ENY",
                listeners: [],
            },

            {
                // team 3
                id: 3,
                title: "# NOBODY HEARD HER",
                author: "Fodé Doumbouya",
                description: "Nobody Heard Her is a GPS-triggered soundwalk about sound, memory, and the politics of whose voices get heard and believed. Set in Stratford, it follows a fictional investigation into a woman's disappearance. Across seven audio montages, listeners encounter conflicting witness accounts, environmental recordings, and an increasingly unreliable narrator trying to reconstruct what happened. Rather than solving the disappearance, the project asks how a particular version of events comes to be accepted as the truth.",
                qr: "images/qr-codes-fall-2026/3.png",
                link: "https://explore.echoes.xyz/collections/YxH7JYlFrMwqfQms",
                listeners: [],
            },

            {
                // team 4
                id: 4,
                title: "Stratford: The Sounds of Somewhere New",
                author: "Dolapo Ajiboye",
                description: "The theme of my soundwalk is ‘Finding somewhere to belong’. Although it does sound very vague, I wanted to explore how we develop a sense of belonging when we move to a new and unfamiliar place. Using my own experience and feelings as someone who's had to move around a lot due to my dad's job, I want to explore how the places we visit, the people we encounter, and the sounds we hear can shape our connection to an environment. The path I chose through Stratford starts from the entrance of Stratford School of Interaction to the crosswalk, then the shop strip, the town centre, Coffee Culture, Avon Theatre, and then finally Battery Park. These locations allow me to explore different aspects of the community, from routines and cultural identity to change, artistic expressions, and self-reflection.",
                qr: "images/qr-codes-fall-2026/4.png",
                link: "https://explore.echoes.xyz/collections/Gip2RlkcSV9n2Ev9",
                listeners: [],
            },

            {
                // team 5
                id: 5,
                title: "Stratford Outsider",
                author: "Charlie Cilla",
                description: "Stratford sells itself through sound: applause in the Festival Theatre, swans on the Avon, quiet heritage streets. As students at the University of Waterloo’s Stratford Campus, we are outsiders to what the town stands for. Our work looks toward the future and technology, while Stratford is rooted deeply in history and tradition. Stratford Outsider is a seven-stop soundwalk heard from that outside position. Its argument is that the future is already audible beneath the town’s rich tradition: idling engines, humming fridges, a till’s beep, a crowded room, a lamp post someone knocked on Downie Street.",
                qr: "images/qr-codes-fall-2026/5.png",
                link: "https://explore.echoes.xyz/collections/I0Ku4WDLcH2tfOkT",
                listeners: [],
            },

            {
                // team 6
                id: 6,
                title: "Who Gets to Be Loud?",
                author: "Elizabeth Ciceu",
                description: "This soundwalk started with sounds I recorded around Stratford: people talking, birds chirping, objects clattering, and a coffee maker running. When I looked back at the recordings, I noticed how much of everyday life happens through sounds we barely pay attention to. I wanted to use those recordings to make familiar places feel different, even briefly, and ask what we notice when we take the time to listen.",
                qr: "images/qr-codes-fall-2026/6.png",
                link: "https://explore.echoes.xyz/collections/NMc3pBWruPszBz9k",
                listeners: [],
            },


            {
                // team 7
                id: 7,
                title: "Where Two Worlds Meet",
                author: "Jarnail Singh",
                description: "My soundwalk focuses on how natural and human-made sounds coexist throughout Stratford. When I was planning my soundwalk, I didn't want to just show how downtown Stratford is noisy while the natural areas are peaceful. Instead, I wanted to show how these sounds blend in together, even in places where you wouldn't expect them to. I chose a route that starts at the University of Waterloo Stratford campus, which then continues through the surrounding streets, and ends at the Shakespearean Gardens. I thought this route would work well because it allowed me to explore the different environments and show how both natural and human-made sounds contribute to the surroundings. The experience is to have listeners pay attention to these sounds and notice how they change depending on where they are.",
                qr: "images/qr-codes-fall-2026/7.png",
                link: "https://explore.echoes.xyz/collections/3bofVLsQqVRKAWZE",
                listeners: [],
            },


            {
                // team 8
                id: 8,
                title: "Finding Peace in Stratford",
                author: "Min Htet Naing",
                description: "Finding Peace in Stratford asks, 'What makes a place feel peaceful, and is that experience available to everyone?' Starting outside Stratford school, the walk moves through streets, into a park, beside water, towards a resting place, through Market Square, and back towards campus.I chose this journey because it connects student movement with spaces used for travel, work, gathering, and rest.Surroundings become an opportunity to notice how peace depends on circumstances as well as sound.",
                qr: "images/qr-codes-fall-2026/8.png",
                link: "https://explore.echoes.xyz/collections/aQO6fRZnY3tQrIug",
                listeners: [],
            },


            {
                // team 9
                id: 9,
                title: "What Does Progress Sound Like?",
                author: "Fadeel Kosoko",
                description: "What Does Progress Sound Like? is a GPS-triggered soundwalk about how the relationship between humans, nature, and technology changes over time. Across seven locations, the composition moves from birds, wind, water, and leaves toward footsteps, tools, machinery, construction, traffic, digital glitches, and imagined robotic sounds. This progression turns the walk into a sonic timeline. Rather than explaining industrialization only as a historical process, the work asks listeners to hear how “progress” changes the sounds that surround us and our attention to them.",
                qr: "images/qr-codes-fall-2026/9.png",
                link: "https://explore.echoes.xyz/collections/x0pdFuIZnu9U7IaZ",
                listeners: [],
            },


            {
                // team 10
                id: 10,
                title: "Power and Discipline in Stratford",
                author: "Fiona Luo",
                description: "My soundwalk is called Sonic Boundaries: Power and Discipline in Stratford. In this project, I want to show how the social rules and power control the sounds around us. Through this process, I learned that quiteness is not always a natural thing. Instead, different place make us change how we speak, move, and act. My soundwalk creates an experience across seven locations at Stratford. It takes listeners from open public shops to the more controlled space of the Stratford School, guiding their physical journey from noisy freedom to the quiet control.",
                qr: "images/qr-codes-fall-2026/10.png",
                link: "https://explore.echoes.xyz/collections/WKljSVJrMnND9bEJ",
                listeners: [],
            },
  

            {
                // team 11
                id: 11,
                title: "Acoustic Textures of Stress and Release: Fading the Noise of Work",
                author: "Emily He",
                description: "This soundwalk is about how everyday sounds can help us release stress. It shows how our mind changes from school pressure to personal relax time. The route is in Stratford and has 7 outdoor points. It starts at the Stratford School of Interaction Design and Business and ends at the local LCBO. This is not just a normal physical walk. My project wants to show that different sounds can actively control how we feel. It shows how the annoying and loud noise of computer work is slowly covered by the clear and real sounds of local shops. It guides the listener from feeling anxious to feeling free.",
                qr: "images/qr-codes-fall-2026/11.png",
                link: "https://explore.echoes.xyz/collections/VNBN5qz1HU4CvhS2",
                listeners: [],
            },

                      {
                // team 12
                id: 12,
                title: "Low Water: A Fisherman's Avon",
                author: "Mary-Ann & Dawson",
                description: "Low Water is a seven-stop soundwalk that leads listeners from Stratford School down to the Avon River and Lake Victoria, guided by an old fisherman who has fished the river for forty years. He is a persona: the voice of a wise, patient listener, but the reflections he speaks are my own. Stratford usually presents its river as scenery: swans, theatre crowds, a calm lake behind the Festival. The fisherman hears it differently, as a living system that is under stress. The walk is built around a real event. In July 2025 a severe storm pushed debris into the RT Orr Dam, a sluice gate jammed open, and Lake Victoria drained. Little rain followed, the lake stayed far below its normal depth, and the Boathouse suspended boat rentals for the first time in its sixty-year history. My sonic argument is that climate change in Stratford is not distant or abstract. It can be heard, and the clearest sign of it is a silence where water should be.",
                qr: "images/qr-codes-fall-2026/12.png",
                link: "https://explore.echoes.xyz/collections/oN9o8Vk4f4qpb0EQ",
                listeners: [],
            },

            {
                // team 13
                id: 13,
                title: "Stratford in Motion",
                author: "Yolanda Wang",
                description: "My soundwalk project, Stratford in Motion, explores how different forms of movement shape the acoustic identity of Stratford. I came up with this title because I want to show that a city is constantly moving through the seven locations I picked, not only through visible activities but also through the sounds we hear in daily life. From footsteps and conversations to traffic and the river, each location has its own rhythm that reflects its environment and meaning.",
                qr: "images/qr-codes-fall-2026/13.png",
                link: "https://explore.echoes.xyz/collections/pU1VqCgMuXe73GLO",
                listeners: [],
            },

            {
              // team 14
              id: 14,
              title: "Shared Spaces, Different Sounds",
              author: "Tracey Chen",
              description: "“Shared Spaces, Different Sounds” explores how everyday sounds shape a sense of belonging at Stratford School and in the surrounding streets. My central question is why people experience sounds differently within the same shared space, and how these differences shape their sense of belonging. Music, conversation, or playful sounds may bring joy to one person but distract another. Through this soundwalk, I invite listeners to reflect on which sounds are accepted, whose activities attract attention, and whose needs may be overlooked.",
              qr: "images/qr-codes-fall-2026/14.png",
              link: "https://explore.echoes.xyz/collections/RgIf6vBcV59nnrUu",
              listeners: [],
            },


            {
                // team 15
                id: 15,
                title: "When Stratford Speaks",
                author: "Jowan Manjooran Jomon",
                description: "When Stratford Speaks is a seven-stop soundwalk through downtown Stratford about how sound changes the way we move through and notice a place. Stratford is somewhere I spend a lot of time because of school, but I never really stop and think about what it sounds like. Once I started recording, sounds I normally ignored, like train bells, warning signals, traffic, conversations, water, insects, store sounds, and music, started standing out more.",
                qr: "images/qr-codes-fall-2026/15.png",
                link: "https://explore.echoes.xyz/collections/OMvFYxtoFeYBdjsH",
                listeners: [],
            },

            {
                // team 16
                id: 16,
                title: "Can you guess the age of water?",
                author: "Frank Le",
                description: "Stratford presents itself as a town of heritage: the Festival, the Avon, the brick storefronts visitors photograph. This seven-stop soundwalk does not add to that picture. It observes. It listens to the quiet daily life of older residents alongside the noise of the present: machines, traffic, and younger people talking, laughing and passing through. The piece does not argue for one side. It listens to how the two coexist, crossing paths on the same sidewalks without quite meeting, and the result is less a conflict than a strange kind of harmony. The work deliberately resists the participatory model of mobile listening that Hope (2018) describes, where the listener’s body becomes the instrument. Here the walker is a witness. I wanted the walk to feel like standing still in a busy street and noticing that the city does not keep one tempo.",
                qr: "images/qr-codes-fall-2026/16.png",
                link: "https://explore.echoes.xyz/collections/AouwlUgEMfIh1HJX",
                listeners: [],
            },

            {
                // team 17
                id: 17,
                title: "The Sounds We Ignore: A Walk Through Stratford",
                author: "Nick Wang",
                description: "The Sounds We Ignore: A Walk Through Stratford, explores how everyday sounds shape our experience of public spaces. The project takes place in downtown Stratford and includes seven GPS-triggered locations. The main idea is to encourage people to pay attention to sounds they normally ignore, such as footsteps, traffic, conversations, machines, birds, and water. These sounds may seem ordinary, but they can tell us a lot about the environment and how people experience the city.",
                qr: "images/qr-codes-fall-2026/17.png",
                link: "https://explore.echoes.xyz/collections/rOtaxl8a3JVkg8ij",
                listeners: [],
            },

            {
                // team 18
                id: 18,
                title: "Sound Power: Who Gets to Decide What We Hear?",
                author: "Annora Zhu",
                description: "This soundwalk moves through seven sites along a short route in downtown Stratford — Shakespearean Gardens, City Hall, Chocolate Barr's Candies, a downtown street, the Stratford Festival Theatre, the Cooper bus terminal, and a classroom — asking one recurring question: who, or what, decides which sounds we are required to hear? I chose Stratford because its civic identity is already organized around sound: the Festival's fanfares, the swans released yearly on the Avon, and a nineteenth-century railway town once scheduled by a single steam whistle. Walking the route, I wanted listeners to notice that this organizing function hasn't disappeared with the railway; it has simply changed instruments — into a payment scanner's beep, a crosswalk signal, a theatre fanfare, a school bell.",
                qr: "images/qr-codes-fall-2026/18.png",
                link: "https://explore.echoes.xyz/collections/gMJznEsHeaQTJqvS",
                listeners: [],
            },

            {
                // team 19
                id: 19,
                title: "What We Tune Out: An Everyday Soundwalk Through Stratford",
                author: "Chloe Ma",
                description: "For my soundwalk, What We Tune Out, I wanted people to pay attention to the small sounds that usually disappear into the background when we are focused on getting somewhere or doing something. I chose seven everyday places in Stratford because I wanted the walk to feel familiar, but also encourage listeners to notice how these places are shaped by the activities happening within them.",
                qr: "images/qr-codes-fall-2026/19.png",
                link: "https://explore.echoes.xyz/collections/e7IPXG0SjsRcJ290",
                listeners: [],
            },

            {
                // team 20
                id: 20,
                title: "Still Here: A River Walk for Closed Eyes",
                author: "Conan Duong",
                description: "Still Here is a listening walk along the river near Stratford School of Interaction. It is built around one idea: the sounds we pass every day never stopped, we simply stopped hearing them. Footsteps, wind in the trees, insects in the grass, rain, and moving water are easy to treat as background. This walk brings them forward and asks the listener to close their eyes, hear one sound at a time, and receive a short haiku that begins with the same cue, “Close your eyes and see.",
                qr: "images/qr-codes-fall-2026/20.png",
                link: "https://explore.echoes.xyz/collections/TEEXfHCd6xLlx7OB",
                listeners: [],
            },

            {
                // team 21
                id: 21,
                title: "Stratford Sound Walk",
                author: "Andrea Sobiesiak",
                description: "The central theme of my soundwalk is to take the listener through a route of some of my personal favourite small businesses that I have discovered in Stratford over my past four years as a student. However, this is not simply a tour of small businesses. I wanted to tell their stories while also provoking deeper thought surrounding the importance of small businesses, the economic and political factors that impact them, what they add to a community, what happens when they disappear, and the role that residents, communities, and governments play in supporting them. My soundwalk also asks listeners to slow down and actively listen to sounds they might normally  ignore, treating the sounds of these businesses as part of Stratford’s acoustic identity.",
                qr: "images/qr-codes-fall-2026/21.png",
                link: "https://explore.echoes.xyz/collections/HJUCVo9PiADLrXEB",
                listeners: [],
            },

            {
                // team 22
                id: 22,
                title: "Threshold Sounds: The Bells of Stratford",
                author: "Jasmine Cabrera",
                description: "This soundwalk explores how religious sound and everyday student life share the same public space in Stratford, Ontario. I chose this route because the university, shops, and several churches sit within a few blocks of each other, so a listener can move from a student conversation to a mass in minutes. My sonic argument is that sound is never neutral. A lunchtime conversation, a mass, and a bell all claim space differently, and who gets heard, and who has to listen, is political.",
                qr: "images/qr-codes-fall-2026/22.png",
                link: "https://explore.echoes.xyz/collections/73razDqVI6ZdrCaE",
                listeners: [],
            },


            {
                // team 23
                id: 23,
                title: "Focused Perspective",
                author: "Emerson Sanchez",
                description: "The composition focuses on our inability to take the time to listen to the things we so often miss compared to our busy, noisy lives. Through the route I created for this composition, I wanted to express this theme through a simple narrative using specific audios or sounds to provoke that sense of immersion. The composition uses no narration, and it was intended to be the case to give more emphasis to the sounds we tend to miss out on, as they are often overshadowed by the loud and chaotic elements in the busy town of Stratford. The entire experience is meant to cause a sense of calmness or a peaceful experience, drawing out specific sounds that add to that undistributed space, which can give audiences a sense or a feeling of control of the environment they are placed in.",
                qr: "images/qr-codes-fall-2026/23.png",
                link: "https://explore.echoes.xyz/collections/uCHbjTv836aCPf7g",
                listeners: [],
            },


            {
                // team 24
                id: 24,
                title: "Can I Rest Here?",
                author: "Kiki Tan",
                description: "Can I Rest Here? is a narrated soundwalk through seven locations near Stratford School, following a fictional character’s repeated attempts to rest. It grows from my experience of waiting between classes or for the shuttle bus. Thirty minutes or an hour can feel too short to begin focused work, especially when becoming absorbed means being interrupted shortly afterward. Yet deciding to rest does not automatically make rest possible. The project asks how schedules, expectations of productivity, and surrounding spaces shape our ability to pause.",
                qr: "images/qr-codes-fall-2026/24.png",
                link: "https://explore.echoes.xyz/collections/th8auKuNYxcNjmco",
                listeners: [],
            },


            // {
            //     // team 25
            //     id: 25,
            //     title: "Stratford: Echoes Between Tracks and Stars",
            //     author: "Saybe & Nirthika",
            //     description: "Welcome to Nirthika and Saybe's soundwalk Stratford: Echoes Between Tracks and Stars. This walk consists of 5 locations. In which order is important to preserve the flow of the story! 1. Grand Trunk Railway - where the journey begins. 2. The Starlight 3. The Spa Near The Tracks 4. Bru Garden 5. Movies Under The Stars - where the journey ends. You will be transported into a day filled with history, relaxation, culinary delight, and nostalgia. We advise you to jot down one word that resonates with you at each location, so please listen closely and take your time.",
            //     qr: "images/qr-codes-fall-2026/25.png",
            //     link: "https://explore.echoes.xyz/collections/nywTb9xJVGVeZtsA",
            //     listeners: [],
            // },


            // {
            //   // team 26
            //   id: 26,
            //   title: "",
            //   author: "",
            //   description: "",
            //   qr: "images/qr-codes-fall-2026/26.png",
            //   link: "",
            //   listeners: [],
            // },


            // {
            //   // team 27
            //   id: 27,
            //   title: "",
            //   author: "",
            //   description: "",
            //   qr: "images/qr-codes-fall-2026/27.png",
            //   link: "",
            //   listeners: [],
            // },

            // {
            //     // team 28
            //     id: 28,
            //     title: "Theatre & Media Soundwalk",
            //     author: "Tiffany & Sophie",
            //     description: "This soundwalk traces Stratford’s rich theatrical history alongside its emerging digital media scene. From the historic Avon Theatre to the contemporary Stratford School of Interaction Design campus, listeners experience field recordings, archival audio, and narration that highlight performances, community spaces, and student activity. By blending past and present, the walk reveals how Stratford’s artistic and technological landscapes intersect, inviting participants to engage with the evolving cultural life and sonic identity of the city.",
            //     qr: "images/qr-codes-fall-2026/28.png",
            //     link: "https://explore.echoes.xyz/collections/KV62sESg6dqbr62h",
            //     listeners: [],
            // },






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
      <v-app-bar color="#8165ff" prominent>
        <v-app-bar-title>GBDA 412 - Soundwalk Exhibition (Fall 2026)</v-app-bar-title>
      </v-app-bar>

      <v-main class="pa-6">
        <div   class="instructions mt-15">
          <h3>Instructions:</h3>
          <ol>
            <li><b>Explore</b> your peers' soundwalks on this webpage and choose one to listen to.</li>
            <li><b>Register</b> your listening by typing your name under the “Listened by” section on the chosen soundwalk.</li>
            <li><b>Scan</b> the QR code for your selected soundwalk and go out to listen to it.</li>
            <li><b>After</b> you finish listening to your first soundwalk, <b>repeat</b> steps 1–3 to select and listen to a second one.</li>
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
                      <p class="mb-2"><strong>author:</strong> {{ sw.author }}</p>
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
                  <strong>Listened by:</strong>

                 <v-text-field
                  v-model="newListenerName[sw.id]"
                  label="Type your name if you listened to this soundwalk."
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

                <v-divider></v-divider>
                <v-card-text>
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


