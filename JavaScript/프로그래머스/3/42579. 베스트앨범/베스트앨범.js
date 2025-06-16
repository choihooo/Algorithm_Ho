function solution(genres, plays) {
    const genreMap = {};
    const genrePlayCount = {};

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        if (!genreMap[genre]) {
            genreMap[genre] = [];
            genrePlayCount[genre] = 0;
        }

        genreMap[genre].push({ idx: i, play });
        genrePlayCount[genre] += play;
    }

    const sortedGenres = Object.keys(genrePlayCount)
        .sort((a, b) => genrePlayCount[b] - genrePlayCount[a]);

    const answer = [];

    for (const genre of sortedGenres) {
        const songs = genreMap[genre];

        songs.sort((a, b) => {
            if (b.play === a.play) return a.idx - b.idx;
            return b.play - a.play;
        });

        answer.push(songs[0].idx);
        if (songs[1]) answer.push(songs[1].idx);
    }

    return answer;
}
