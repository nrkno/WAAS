const AudioPlayer = ({ audio, cursor }) => {
  const { useEffect } = preact;

  useEffect(() => {
    const audioElement = document.getElementById("audio-editor");
    if (!cursor) {
      audioElement.pause();
    } else {
      audioElement.currentTime = cursor;
      audioElement.play();
    }
  }, [cursor]);

  useEffect(() => {
    const reader = new FileReader();
    const audioElement = document.getElementById("audio-editor");
    reader.addEventListener("load", (event) => {
      audioElement.src = event.target.result;
      audioElement.controls = true;
    });

    reader.readAsDataURL(audio);
  }, [audio]);

  return html`<audio id="audio-editor"></audio>`;
};

export default AudioPlayer;
