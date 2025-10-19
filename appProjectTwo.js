const { createApp } = Vue;
const { createVuetify } = Vuetify;

const App = {
  data() {
    return {
      drawer: true,
      tab: 0,
      streamAWorkshops: [
        { title: "Workshop 1: Biofeedback practice (body as instrument)", description: "Learn to convert body movement data into music" },
        { title: "Workshop 2: Working with GPS + heart rate data + MIDI", description: "Coming soon!" },
        { title: "Workshop 3: Data sonification with Online Sequencer", description: "Coming soon!" }
      ],
      streamBWorkshops: [
        { title: "Workshop 1: AI music tools (music machines)", description: "Establish creative parameters" },
        { title: "Workshop 2: Prompt engineering for music production", description: "Create detailed prompts" },
        { title: "Workshop 3: Music production with ElevenLabs", description: "Generate AI music" }
      ]
    };
  },
  methods: {
    scrollToStep(stepIndex, stream) {
      if (stream === 'A') {
        // Tab values: 1 = Workshop 1, 2 = Workshop 2, 3 = Workshop 3
        this.tab = stepIndex + 1;
      } else if (stream === 'B') {
        // Tab values: 4 = Workshop 1, 5 = Workshop 2, 6 = Workshop 3
        this.tab = stepIndex + 4;
      }
      console.log(`Navigating to ${stream} Workshop ${stepIndex + 1}, tab: ${this.tab}`);
    }
  }
};

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#ff4b2b',
          secondary: '#ff9800',
          accent: '#9c27b0',
          background: '#454545',
          error: '#f44336',
        },
      },
    },
  },
  typography: {
    defaultFontFamily: 'Lato, Arial, sans-serif',
  },
});

createApp(App).use(vuetify).mount("#app");