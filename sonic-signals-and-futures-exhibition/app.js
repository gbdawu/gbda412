const { createApp } = Vue;

createApp({
    data() {
        return {
            currentIndex: null,
            songs: [
                // TEMPLATE - Replace with your actual student data
                // Copy this object structure for each of your 25 students
                {
                    studentName: "Elizabeth Green & Kamila Langer",
                    songTitle: "Golden Horizons",
                    description: "For our project, our main goal was to fuse the soft, dreamy “Rooftop Reverie” tone with the brighter, more energetic vibe of “Golden Horizons”. We were really drawn to the contrast between the two: one feels airy, emotional, and intimate, while the other feels warm, rhythmic, and uplifting.We wanted to see if generative AI could help us blend those feelings into one cohesive track that still sounded natural and intentional, not random or AI- generated.",
                    platform: "suno", // Options: "mp3", "suno", "elevenlabs", "onlinesequencer"
                    source: "https://suno.com/embed/cb6e3445-1051-4805-9264-399044ee85f8" // For mp3: "song1.mp3" | For suno/elevenlabs: full URL | For onlinesequencer: sequence ID or full URL
                },
                // team 2
                {
                    studentName: "Matthew Best & Jennifer Huang",
                    songTitle: "Run Club Run",
                    description: "As we mapped our CSV data to MIDI for transfer into Online Sequencer, we had to consider which elements would make the most sense for each parameter while determining if the output was usable material for our final compositions. We ended up deciding on focusing on speed and heart rate for the composition’s note duration and pitch, while focusing on velocity for power, position longitude for time, and altitude for octave.We felt that speed and heart rate for duration and pitch in particular would yield the most interesting results, as we felt that the running speed would directly correlate to heart rate, which in turn would make the song sound more lively and catchy with an increase in patterns you would be able to hear within the song’s melody.",
                    platform: "Strava & onlinesequencer",
                    source: "https://onlinesequencer.net/5021580"
                },


                // team 3
                {
                    studentName: "Owen Duckett & Aadya Verma",
                    songTitle: "Digital Dawn (Reboot)",
                    description: "During the creation of our final composition we worked using both Chat GPT and ElevenLabs. We built an outline for our song with key moments like the intro, conclusion and bridge. While following our outline we started to refine prompts in Chat GPT to control the background sounds, tone, and used keywords such as futuristic and synthetic. After playing around with different keywords and eventually finding the right tone and rhythm we were looking for, we imported the generated materials into ElevenLabs where we began editing. During the editing we tried to layer the materials and lyrics correctly to achieve our goal of synthetic futuristic song. Overall the framework for our overarching idea connects directly to course readings on AI and music. As White argues in the course reading The AI music problem, AI challenges traditional notions of creativity by producing outputs that feel emotional yet lack a human source. We played into this idea by using a voice in our song that sounds almost but not fully human like and alive.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/FnILnGpB9zFfwKVWsQ0e/embed"
                },

                // team 4
                {
                    studentName: "Lila Hoang & Emily Wu",
                    songTitle: "Digital Hearts: Voices in the Algorithm",
                    description: "Digital Hearts: Voices in the Algorithm provides a strong framework for exploring human–AI musical collaboration. Its focus on digital emotion, shared authorship, and algorithmic creativity guided our lyrics. The proposal aligns with McLean and Dean (2018) on algorithmic possibility and White (2025) on AI’s emotional limitations. We aimed to  connect these readings to lecture discussions on co-creation, digital performance, and algorithmic creativity, embedding them directly into the lyrics rather than pulling out isolated themes.",
                    platform: "suno",
                    source: "https://suno.com/embed/1046449b-9fdf-4348-989a-30bd79302a12"
                },
                // team 5
                {
                    studentName: "Sakeena Naeem & Sydney Tran",
                    songTitle: "Drifting Through The Veil",
                    description: "For our final composition, we selected the concept developed in our Part 1 proposal: creating a dream-pop and ambient electronic piece that captures the sensation of drifting between reality and imagination. From the beginning, our intention was to design a sonic experience that felt hazy, viscous, and trance-like, where time stretches, emotions blur, and the listener moves through a space that feels both comforting and disorienting. This conceptual direction shaped every step of our collaborative workflow.",
                    platform: "Suno and Bandlab exported to WAV",
                    source: "GBDA412_A2__Drifting_through_the_Veil.wav"
                },
                // team 6
                {
                    studentName: "Afreen Ali & Hannah Taylor",
                    songTitle: "Synthetic Pulse",
                    description: " Synthetic Pulse is an AI-generated electronic piece that explores the evolving emotional relationship between human and machine. This project grew directly from the concept Hannah proposed in Part 1, where she set out to sonify the tension between mechanical precision and emerging emotional presence. She was interested in how an AI system, built on logic, pattern recognition, and statistical prediction, could still evoke feelings of warmth, curiosity, or even self-awareness. This question became the starting point for the emotional and structural arc of the piece. On the technical side, this project relied on a combination of prompt design in ChatGPT and audio generation in ElevenLabs.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/Y1JkkKkb1TJh3DXu1BRW/embed"
                },

                // team 7
                {
                    studentName: "Eileen Gu & Sophie Wang",
                    songTitle: "Neon Sky",
                    description: "For our final composition, we chose to develop the dreamy and emotional pop song idea introduced in Part One. We were drawn to this concept because it reflects a youthful, playful, nostalgic feeling that is common in contemporary K-pop and soft pop. Our goal was to create a song that feels light, cute, and memorable while still expressing an emotional atmosphere. We wanted the listener to feel as if they were entering a soft, airy world with a bright and warm tone.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/imoSEG1Jxsa6Xuz22E2l/embed"
                },

                // team 8
                {
                    studentName: "Erin Liu & Zeaj Zamoranos",
                    songTitle: "Moonlit Fold",
                    description: "Our composition inspired by J-pop style and structure for catchiness and repetition, while grounding its emotional world in imagery-driven abstraction in lyrics. We also took the dreamlike atmosphere of dream-pop, alternative, and R&B sounds to create a catchy, airy tone. Our technical process went through several iterations. We first drafted prompts in ChatGPT and used them in ElevenLabs to generate early vocal and instrumental materials. However, ElevenLabs consistently produced a singing voice with a noticeable Japanese accent, which did not reflect our intention of a J-pop style. We realized it was fixated on genre as vocal identity rather than musical structure, and when editing its outputs became repetitive and inefficient, we shifted to using Suno. Suno offered a clearer separation between audio and lyrical control, allowing us to focus on shaping mood, lyrics, and atmosphere rather than troubleshooting unintended vocal stylization and drift in style.", platform: "suno",
                    source: "https://suno.com/embed/4457532a-5bd9-4d31-b28f-f7e04fad92d1"
                },

                // team 9
                {
                    studentName: "Saybe Lakoh & Nirthika Senthilkumaran",
                    songTitle: "Same Street",
                    description: "When we brought two ideas together, it felt as the most realistic way to represent the friendship we had. Our idea had always been to create the song to feel like a journey, on what captured what God has done & how this created our bond and shaped who we are becoming. We wanted to add a sense of authenticity & rawness so we chose to sing the lyrics using our own voices instead of fully relying on AI. Integrating our voices made the process more vulnerable and fulfilling, since we experienced firsthand what goes into writing, recording, and assembling a track. With only a closet, a tripod, and wired headphones, we created an environment that made the instrumental feel warm and alive.",
                    platform: "Suno exported to m4a",
                    source: "Same_Street.mp3"
                },

                // team 10
                {
                    studentName: "Anne Gaviola & Kim Mai",
                    songTitle: "Mermaid Tale",
                    description: "Our technical process began with recording the walk using Strava. We took the CSV data that captured longitude, latitude, and elevation to turn into MIDI melodies to use as our base. Each CSV column had its own sonic character: ● Longitude produced smoother, more classical-sounding lines, which we noticed was more prominent in our composition. ● Latitude created a steadier rhythm. ● Elevation generated bouncier variations that revealed where the body moved uphill, downhill, or across uneven terrain. When it came to mapping this data information, we wondered which parameter should lead the emotional tone? This reflects Miguel Ortiz’s point that biosignal-driven art is never just measurement but is always shaped by the artist’s decisions and interpretation. Our sequencing decisions were heavily influenced by the ocean and underwater theme, which pushed the composition into a more experimental direction. We thought it would be very unique GBDA 412 - Part 3: Final Artistic Composition to include drawings of outlines of things that match the theme of ocean and underwater. We allowed the visual shapes to influence the rhythmic and melodic feel of the sequence. Incorporating these drawings made the piece become a layered artwork that blended movement, mapping, and art. In the end, we decided to prioritize experimentation instead of a perfect melody. The colour of the main melody from our data is yellow, which we used as sand. The mermaid tails, crabs, bubbles, shells, and waves were chosen based on the color of the instrument, not the instrument itself. The song’s charm is a product of visual art.",
                    platform: "Strava & onlinesequencer",
                    source: "https://onlinesequencer.net/5004886"
                },

                // team 11
                {
                    studentName: "Nai Saepharn-Dawkins & Lydia Yared",
                    songTitle: "The Other Side of Us (Edit)",
                    description: "We focused on the storyline of a woman who is deeply in love with a man who does not love her back. She desires to be in a relationship, but she only wants to fulfil that desire with that man.  Similar to the emotional tone and theme of ‘The Other Woman’ by Lana Del Rey. We drew inspiration from ballads like ‘Oscar Winning Tears’ by Raye and ‘All By Myself’ by Celine Dion. These pieces capture emotional sensations of longing and desire which we wanted to envision in our final composition. We wanted listeners to deeply be immersed within the song, evoking emotions such as yearning, heartache, and awe.",
                    platform: "suno",
                    source: "https://suno.com/embed/65f1cf1b-7c09-4c1c-8963-d5dda99e4edf"
                },

                // team 12
                {
                    studentName: "Casslie Casslie & Michelle Ye",
                    songTitle: "I’m That Girl",
                    description: "We decided to create a concept that blends both of our proposals along with a new genre of EDM. We wanted to incorporate a short, punchy line that can be repeated in the chorus, centered around “I’m that girl”. We were drawn to this concept because it focused on vocal minimalism and created a high-energy festival track that aligns with our interests in confident, sassy music.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/XukJeToi0V2CUEu1W4F6/embed"
                },

                // team 13
                {
                    studentName: "Saima Desai & Chelsea Wu",
                    songTitle: "Data Composition 2",
                    description: "We decided on focusing on pilates because the workout itself too can contain a lot of variety. With the diversity that comes with that physical activity, it would also provide us with different types of compositions that we can choose from. Referring to the heartbeat changes that you can experience with the different sequences and progressions you face in pilates. In the final composition, we followed the instructions that we followed in the workshops, so we collected our Strava data and converted them into CVS files. Using that file it composed a strong base for our sounds as we decided to associate the heart beat into our choice of instrument.",
                    platform: "Strava & midi",
                    source: "data-composition-2.mp3"
                },

                // team 14
                {
                    studentName: "Caleb Hahm & Justin Luu",
                    songTitle: "Scroll to Tomorrow",
                    description: "For the final composition, we decided to choose Stream B because we thought the composition in the last part of the assignment was pretty funny, and sounded pretty good. We wanted to continue working and developing this song and make sure to include more intention by basing the lyrics off our personal experiences. Particularly we were influenced by Christopher White's ideas on how Art depends a lot on human intention, and that music generated without feeling losing meaning. Understanding this notion and ideas from the article, we made sure intention was at the core of this song. Using the generated lyrics as the foundation, we changed parts of it to fit our experiences more. This was the biggest challenge for our project, because whenever we would change the lyrics for a particular section, it wouldn’t flow well with the structure of the song. We learned AI can be quite unpredictable and the samples produced didn’t sound good. Trying to balance that creative intention to create a cohesive song was really difficult.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/TFXsfndpyfZYttkg7uv0/embed"
                },

                // team 15
                {
                    studentName: "Shivala Rampersad & Tara Sohanaky",
                    songTitle: "Aurora Descent",
                    description: "When we began planning our joint piece, we realized that her idea of a cinematic, emotional journey through the night sky resonated strongly for both of us, and we found that working with AI-generated music also more aligned with the direction we wanted to explore. After revisiting and refining the narrative arc, we merged our perspectives into a shared concept: a four-part progression from stillness to intensity and then back to calm, told through instrumentals of piano, strings, rhythmic shifts, and dynamic contrasts. This structure closely follows the narrative we developed: the piece traces the experience of lying on the ground at night, observing subtle movements and colours in the sky, feeling a moment of disorientation and awe in the middle, and finally returning to a sense of calm and stillness. Our technical process became a collaborative cycle of prompt-writing, testing, troubleshooting, and re-engineering our prompts.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/uD5yUIgzl829wLi81xhp/embed"
                },

                // team 16
                {
                    studentName: "Monia Khan & Melanie Menezes",
                    songTitle: "Generated Realness",
                    description: "We chose to explore Melanie’s concept to create an iconic ballroom culture sound that represents 90’s queer culture. This concept was inspired from sounds from the famous 90’s documentary, “Paris is Burning” which follows the lives of prominent ballroom figures. We chose this concept to dive deeper into sounds from diverse communities, and to see how AI can translate this idea into a piece that represents a rich history and community.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/kWFcYBemt6NMr6fA2ecb/embed"
                },

                // team 17
                // {
                //     studentName: "",
                //     songTitle: "",
                //     description: "",
                //     platform: "",
                //     source: ""
                // },

                // team 18
                {
                    studentName: "Sophie Kim & Tiffany Trinh",
                    songTitle: "Starry Walk",
                    description: "For our final artistic composition, we first decided to follow Sophie’s proposal by capturing Strava data of two separate walks, each recorded by one of us, with the intent of capturing our emotions in response to the locations we encountered on our walks. However, after collecting our materials, we realized that we had both experienced a similar feeling on our walks, as they both had been cozy and calm and decided to take our composition into a new and more specific direction.",
                    platform: "Strava & onlinesequencer",
                    source: "https://onlinesequencer.net/4987857"
                },

                // team 19
                {
                    studentName: "Mai Nguyen & Maleeha Abrar",
                    songTitle: "Fractals",
                    description: "We wanted to see how AI could shape the emotional direction of a metal and rock track inspired by Deftones. We were really drawn to that mix of dreamy softness and heavier emotional intensity, and we were curious about what would happen if we guided the AI through feelings instead of giving it strict musical instructions. That basically became the heart of our concept. We wanted an instrumental piece that slowly grows and shifts, almost like it feels alive, but we also wanted to keep that dreamy, drift-like atmosphere.",
                    platform: "suno",
                    source: "https://suno.com/embed/e54551d1-5c21-45c1-87a4-9281ebf2d691"
                },

                // team 20
                {
                    studentName: "Isabelle Cho & Hanson Trac",
                    songTitle: "Connected Flow",
                    description: "In the same way that R&B music currently serves as a conduit for solace and resonance, we were curious about how technology may expand, translate, and even manage emotional experience. This prompted me to investigate how AI tools may work together to create a sound environment that captures the soft tug, pull, and flow of human connection. Using ChatGPT to refine text prompts and ElevenLabs to shape the generated audio elements was a major part of my creative process for Connected Flow. Using what McLean and Dean (2018) refer to as a co- creative algorithmic partner,  we worked iteratively with ChatGPT, letting it suggest lyrical phrasing, theme variants, and emotional framings that we could then refine. we employed the algorithm as a responsive system, one that could broaden my creative vocabulary and provide different emotional interpretations we might not have arrived at on my own, rather than as a producer of final material. This is consistent with McLean and Dean's description of algorithmic systems as instruments that enhance musical reasoning rather than taking the place of human intuition.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/87LTl9dcbFs3Uftnqeue/embed"
                },

                // team 21
                {
                    studentName: "Joy Li & Ella Ye",
                    songTitle: "Bittersweet Tomorrow",
                    description: "Bittersweet Tomorrow is a 3-minute AI-assisted musical composition that explores the emotional contradiction of longing for someone while knowing the relationship cannot continue. The piece blends orchestral textures, electronic elements, and a dramatic electric guitar solo to create a shifting emotional landscape. Penu’s (2025) discussion of emerging AI-mediated music platforms allows the work to intentionally situate itself within a hybrid creative ecology where human artistry and machine-generated patterning intersect and reshape contemporary emotional expression.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/q4TuGAUMjp5iz5OdOt3E/embed"
                },

                // team 22
                {
                    studentName: "Emma Chen & Cally Liu",
                    songTitle: "Holding Out (For a Sign)",
                    description: "For our final composition, we chose to write our song about searching for a co-op job placement hidden in a love song. Throughout the song, it reflects the experiences that a student would go through when they are trying to find a job. We found that there were a lot of parallels between wanting a romantic relationship and the anticipation of finding a job. This song is open to interpretation by the listeners, which is why we made the lyrics very vague. We used many AI tools when creating our song, primarily ElevenLabs and ChatGPT. We gave a descriptive prompt to ChatGPT to generate the guidance and lyrics for our. In our initial prompt, we asked to include two meanings: a surface-level love song along with a hidden metaphor about a student’s co-op search. We emphasized the feeling and vibe of the song, while specifying that we wanted the composition to be inspired by the band, CAS. ",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/8G9ldGhygul8etV61O57/embed"
                },

                // team 23
                {
                    studentName: "Tyler Kihut & Kaelyn White",
                    songTitle: "Dream to Dance",
                    description: "We made the song ‘Dream to Dance, a theme song for a dance competition. We chose this concept because competitions are already built around emotion, such as nervous backstage energy, the lights coming up, the drop, and the relief after a big performance. We wanted to see if we could use AI tools to turn all of those emotions and story music. We really took inspiration from early-2000s club/EDM sounds that feel nostalgic but are still high-energy. The song was built by refining text prompts in ChatGPT and then generating and editing musical sections in ElevenLabs. Our first prompt focused on an atmospheric intro with ambient pads, filtered synths, and soft vocal chops to “build anticipation for a dance competition,” like a 2000s club mix. After hearing the first outputs, we tightened later prompts to specify tempo, a clear four-on-the-floor kick, warmer bass, and brighter percussive synths so the verse felt like the beat had finally “dropped.” We also added instructions for how often the phrase “Dream to Dance” should appear as vocal chops to match my written lyrics and hook.",
                    platform: "elevenlabs",
                    source: "https://elevenlabs.io/music/songs/QyegyTmEPXuZZuz1XwNy/embed"
                },

                // team 24
                {
                    studentName: "Mary-Ann Adebayo & Dawson Jen",
                    songTitle: "Echoes in the Circuitry",
                    description: "We explored the idea of artificial longing. We chose this concept because we were interested in how a system can imitate emotion without ever feeling it. This idea connects closely to White’s writing on AI and creativity, which explains that AI does not understand feeling and instead produces patterns that resemble it. We wanted our piece to show this difference through sound, structure, and vocal design. Our first major step was building a warm and nostalgic atmosphere. We used a prompt that asked for retro inspired electronic textures, soft analog pads, smooth swing rhythm, filtered bass, and quiet slightly synthetic vocals. After generating the track, we edited the pad layers to soften them and adjusted the bass to stay gentle and steady. This helped shape the emotional tone of artificial longing, which we introduced in our proposal as the central theme.",
                    platform: "ElevenLabs & mp3",
                    source: "Echoes in the Circuitry.mp3"
                },

                // team 25
                {
                    studentName: "Henrietta Van Niekerk",
                    songTitle: "Elegy for the Last Real Voice (Full Manifest Cut)",
                    description: "I created a ~4-minute dark cabaret piece tracing what happens when a synthetic voice tries—first earnestly, then catastrophically—to feel. My process began by drafting a detailed emotional arc and structural outline, which I refined with the help of ChatGPT used strictly as a clarity and line-editing tool. I deliberately avoided using AI for the lyrics at this stage in order to focus on shaping the performance logic. I tried AI lyrics once (ChatGPT and ElevenLabs) and both significantly flattened the complexity of the idea or were entirely nonsensical. So instead, I wrote my own lyrics, using chatGPT as more of a ‘line editor’. The first ElevenLabs render (the “Late-Night Cut”) interpreted this outline with notable restraint—soft dynamics, minimal contrast, and a shy, contained delivery.", 
                    platform: "ElevenLabs & mp3",
                    source: "Elegy for the Last Real Voice.mp3"
                },

                // team 26
                // {
                //     studentName: "",
                //     songTitle: "",
                //     description: "",
                //     platform: "",
                //     source: ""
                // }


            ]
        };
    },
    computed: {
        currentSong() {
            return this.currentIndex !== null ? this.songs[this.currentIndex] : null;
        }
    },
    methods: {
        selectSong(index) {
            this.currentIndex = index;
        },
        nextSong() {
            if (this.currentIndex !== null && this.currentIndex < this.songs.length - 1) {
                this.currentIndex++;
            }
        },
        previousSong() {
            if (this.currentIndex !== null && this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        getEmbedUrl(source, platform) {
            // Handle different platform embed URL formats

            if (platform === 'suno') {
                // Suno embed format: extract song ID from URL
                // Example: https://suno.com/song/abc123 -> embed URL
                if (source.includes('suno.com/song/')) {
                    const songId = source.split('suno.com/song/')[1].split('?')[0];
                    return `https://audiopipe.suno.ai/?item_id=${songId}`;
                }
                return source; // Return as-is if already formatted
            }

            if (platform === 'elevenlabs') {
                // ElevenLabs usually provides direct embed URLs
                // If it's a share link, it typically works directly in iframe
                return source;
            }

            if (platform === 'Strava & onlinesequencer') {
                // OnlineSequencer format
                // If source is just the ID: "2832847"
                // If source is full URL: "https://onlinesequencer.net/2832847"
                if (source.includes('onlinesequencer.net')) {
                    const seqId = source.split('onlinesequencer.net/')[1].split('?')[0];
                    return `https://onlinesequencer.net/${seqId}`;
                } else {
                    // Assume it's just the ID
                    return `https://onlinesequencer.net/${source}`;
                }
            }

            return source;
        }
    },
    mounted() {
        // Optional: Auto-select first song on load
        if (this.songs.length > 0) {
            this.currentIndex = 0;
        }
    }
}).mount('#app');