// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

interface Song {
	type: "song";
	artist: string | string[];
	length: number;
	name: string;
}

interface Album {
	type: "album";
	songs: Song[];
}

interface Playlist {
	type: "playlist";
	resolve(): Song[];
}

type MusicRecommendationItem = Song | Album | Playlist;

interface ArtistWiseSongs {
	[i: string]: string[];
}

interface UnrolledPlaylist {
	artists: ArtistWiseSongs;
	songs: string[];
	time: number;
}

export function unrollPlaylist(
	items: MusicRecommendationItem[]
): UnrolledPlaylist {
	const artistWiseSongs: ArtistWiseSongs = {};
	const songsList: string[] = [];
	let totalTime = 0;

	function addSong(song: Song) {
		const songArtists = Array.isArray(song.artist)
			? song.artist
			: [song.artist];
		songArtists.forEach((artist) => {
			artistWiseSongs[artist] ??= [];
			artistWiseSongs[artist].push(song.name);
		});
		songsList.push(song.name);
		totalTime += song.length;
	}

	for (const item of items) {
		switch (item.type) {
			case "song":
				addSong(item);
				break;

			case "album":
				item.songs.forEach(addSong);
				break;

			case "playlist":
				item.resolve().forEach(addSong);
				break;

			default:
				throw new Error("Bad input");
		}
	}

	return {
		artists: artistWiseSongs,
		songs: songsList,
		time: totalTime,
	};
}
