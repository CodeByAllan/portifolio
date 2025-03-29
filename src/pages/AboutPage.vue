<template>
  <q-page class="flex flex-center">
    <div class="about-container">
      <div class="about-title">
        <h2 class="text-h4 text-weight-bold">About Me</h2>
        <div class="line"></div>
      </div>
      <p class="text-body1">
        I am a web developer passionate about technology, always seeking to learn and build
        innovative solutions. My core development skills include
        <strong>HTML, CSS, JavaScript, and TypeScript</strong>, and I have experience with frontend
        frameworks such as <strong>Vue.js, Quasar Framework, and a little bit of React.js</strong>.
      </p>
      <p class="text-body1">
        On the backend, my main stack is <strong>Node.js with TypeScript</strong>, but I also have
        experience with <strong>Ruby</strong>, where I developed and published a Telegram bot
        library in the official RubyGems repository. Additionally, I work with
        <strong>Go (Golang)</strong>, with my first project being a CHIP-8 emulator for Windows,
        which uses the Fyne library to render games—although currently, the emulator runs only via
        the command line.
      </p>
      <p class="text-body1">
        I have worked on freelance projects, including modifying a <strong>React.js</strong> landing
        page. Currently, I work as an <strong>IT Support Technician</strong>, specializing in
        technical support.
      </p>
      <p class="text-body1">
        I am driven by challenges and love exploring new technologies, whether in web development,
        building emulators, or automating tasks. If you'd like to exchange ideas about technology or
        collaborate on something innovative, feel free to reach out—I'm always open to new
        opportunities!
      </p>
    </div>
  </q-page>
</template>

<style scoped>
.about-container {
  width: 90%;
  padding: 24px;
  text-align: center;
}
.about-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-title h2 {
  margin-right: 16px;
  color: var(--q-primary);
}
.line {
  flex-grow: 1;
  height: 2px;
  width: 150px;
  background-color: var(--q-primary);
}
.text-body1 {
  font-size: 28px;
  line-height: 35px;
}
@media (max-width: 600px) {
  .text-body1 {
    font-size: 16px;
    line-height: 30px;
  }
  .about-title h2 {
    font-size: 20px;
  }
}
</style>
