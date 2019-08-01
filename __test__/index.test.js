const createManifest = require("../index.js");
const path = __dirname + "/" + "testFiles";
test("test", async () =>
  createManifest(path).then(result =>
    expect(result).toEqual([
      ["testFiles", true, null],
      ["testFiles/assets", true, null],
      ["testFiles/assets/imgs", true, null],
      [
        "testFiles/assets/imgs/Screenshot from 2019-05-23 00-24-08.png",
        false,
        "5c0c72af9d37c5bb4645be3d0fff50dc"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-01 20-05-20.png",
        false,
        "ad996cd0b4bb17f3070d0f2d25bb7745"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-02 01-44-09.png",
        false,
        "3a2526004f376d4618ba7feb0d30da40"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-09 20-15-08.png",
        false,
        "91068d93b9c264d0857be519717c0128"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-10 23-42-07.png",
        false,
        "b5d722b955d7a47959a7d15c8ed2800f"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-15 19-01-01.png",
        false,
        "84cfb4ea468b9b3e28dcf9f6c000c228"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-17 12-03-50.png",
        false,
        "f65d10c655fb34bd18aea4acab20e788"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-21 00-02-26.png",
        false,
        "4ac2cc59c92c24abe81a6a083bae391c"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-21 00-02-41.png",
        false,
        "33bee1ad263d53d7efe0eab1cff2f204"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-06-22 22-56-05.png",
        false,
        "58e5804ad5c486e50fcc1c0864083c59"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-07-14 00-11-21.png",
        false,
        "108e519702a4406dcf111dd84851358c"
      ],
      [
        "testFiles/assets/imgs/Screenshot from 2019-07-14 20-08-30.png",
        false,
        "737d435735524fb2eed36df7bd135a37"
      ],
      ["testFiles/index.html", false, "de9f6d215e4c2603705b11fcb37fc6a6"],
      ["testFiles/index.js", false, "72677581120a9cd901444f32d472b47c"]
    ])
  ));
