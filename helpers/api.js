import config from '../config';

const rootUrl = 'https://api.twitch.tv/kraken';

const fetchData = url =>
{
  return fetch(`${rootUrl}/${url}client_id=${config.CLIENT_ID}`).then(res => res.json());

}

export async function getAllGames() {
  let data;
  try {
    data = await fetchData('games/top?limit=30&');
  } catch (err) {
    console.log(err);
  }
  return data;
}

export async function getStreamsOf(game) {
  let data;
  try {
    data = await fetchData(`streams?game=${game}&`);
  } catch (err) {
    console.log(err);
  }
  return data;
}