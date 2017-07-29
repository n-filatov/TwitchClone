import config from '../config';

const rootUrl = 'https://api.twitch.tv/kraken';

const fetchData = url =>
{
  console.log(url);
  return fetch(`${rootUrl}/${url}?client_id=${config.CLIENT_ID}`).then(res => res.json());

}

export async function getAllGames() {
  let data;
  try {
    data = await fetchData('games/top');
  } catch (err) {
    console.log(err);
  }
  return data;
}