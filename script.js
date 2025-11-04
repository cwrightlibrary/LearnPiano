var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("sheet-music-container");
osmd.setOptions({
  backend: "svg",
  drawTitle: true,
});
osmd.load("assets/vexflow_song.musicxml").then(function () {
  osmd.render();
});