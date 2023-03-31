let igenres = ["classic", "pop", "classic", "classic", "pop"];
let iplays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  const info = genres.map((genre, num) => {
    return { genre, play: plays[num], num };
  });

  const genresArray = [...new Set(genres)];
  // 랜덤 장르 순서

  const settotal = (index) => {
    let genreplays = info.filter((e) => e.genre === genresArray[index]);

    console.log("genreplays", genreplays);

    const genretotalplay = genreplays.reduce(
      (accumulator, currentValue) => accumulator + currentValue.play,
      0
    );
    return genretotalplay;
  };

  // 각 장르 토탈 뷰 구하기

  let genrestotal = new Array(genresArray.length).fill(0);

  for (let i = 0; i < genresArray.length; i++) {
    genrestotal[i] = settotal(i);
  }

  let totalinfo = genresArray.map((genre, num) => {
    return { genre, totalplay: genrestotal[num] };
  });

  totalinfo = totalinfo.sort((a, b) => b.totalplay - a.totalplay);

  const dap = (itotalinfo, iinfo) => {
    console.log(itotalinfo, iinfo);

    let daparray = [];

    for (let i = 0; i < itotalinfo.length; i++) {
      let genremusics = iinfo.filter((e) => e.genre === itotalinfo[i].genre);

      genremusics = genremusics.sort((a, b) => b.play - a.play);

      let topgenremusics = genremusics.slice(0, 2).map((e) => e.num);

      daparray = daparray.concat(topgenremusics);
    }

    return daparray;
  };

  return dap(totalinfo, info);
}

console.log("dap", solution(igenres, iplays));
