const {exec} = require('child_process');
const cheerio = require('cheerio');

const COMMAND = `curl 'https://www.apsiyon.com/profileBalance.aspx' -H 'cookie: ASP.NET_SessionId=${process.env.APSIYON_SESSION_ID};' -H 'dnt: 1' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9,tr;q=0.8' -H 'upgrade-insecure-requests: 1' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36' -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'cache-control: max-age=0' -H 'authority: www.apsiyon.com' -H 'referer: https://www.apsiyon.com/dashboard.aspx' --compressed`;
class Apsiyon {
  static getMaintenanceFee() {
    return new Promise((resolve, reject) => {
      exec(COMMAND, (err, stdout, stderr) => {
        if (err) return reject(err);

        const $ = cheerio.load(stdout);
        const placeholder = $('.ffcw > .fin > .fcontin').find('.ovblock').text();
        const fee = placeholder.substring(placeholder.indexOf(', ') + 1, placeholder.indexOf(' TL')).trim();

        resolve(fee.replace(',', '.'));
      });
    });
  }
}

module.exports = Apsiyon;