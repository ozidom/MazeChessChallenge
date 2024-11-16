/*const GAME_TEXT = "<p>Click START. Choose ♚ ♝ ♜ or ♞. Move from the bottom left to the top right in the fewest moves and must collect all gold (gold squares). Cannot move on blocked squares but Knights can jump over them. Switch piece for 1 move.</p>";
const HELP_TEXT = "<h2>Help</h2><p>All you need to do is move a chess piece from the lower left hand corner to the lower right.</p><p>♚ Kings move one space any direction, ♜ Rooks (look like castles) move in cardinal directions (N,S,E and W), Bishops move diagonal and ♞ Kinghts move in a L shape but they can jump spaces. A knight moves in an  L shape: two squares in one direction, then one square sideways, and can jump over other pieces on the board. You can switch pieces as well but can only use a piece once per board. Remember you need to avoid any obstacles on the board like lava, chasms  and water .</p><p>Also remember to check out the training grounds and use the challenge rating to practice.<H2>Additional Challenges</H2>The following are some bonus points you can always go after <ul><li>4 Corners: Visit all 4 corners of the board.</li><li>Full House: All squares must be visited.</li><li>Royal Flush: Each of the 4 pieces (King, Knight, Bishop, Rook) must be used.</li><li>Solo: A single piece must complete the entire challenge without any other piece.</li><li>Knight's Tour: Complete the challenge using only the Knight, visiting every square on the board without landing on the same square more than once.</li><li>Two-Piece Tango: Complete the challenge using exactly two different pieces, switching between them at least once.</li><li>Cornered King: Start at A1 with the King and end at H8, but you must touch each of the four corners of the board along the way.</li><li>Knight's Journey: Reach H8 in a specified number of moves (e.g., 10 moves), using only the Knight.</li></ul>";
const HELP_US_TEXT = "<h2>Support</h2><p>We need your help and support to get the word out about Mazechess. Consider anything:<UL><LI>Sharing the link with friends</LI><LI>Using the Clipboard button and sending an image to someone else or tagging it with #mazechess on your favourite social media platform</LI></p>";
const WHY_TEXT = "<h2>Why,What and Thanks</h2><p><b>Why</b> did we make this? Mazechess has been created as we started to create a simpler table top role playing gams (TTRPG). These type of games are games like D&D, Pathfinder and Call of Cthulhu. They are great games and lots of fun, but can be quite complicated and take a long time to play.</p><p>So we started the whole concept of Mazechess as a much faster and simpler version of a TTRPG. This game actually part of some optional rules set for the Mazechess TTRPG that we have converted to a web game/</p><p>In this game each of the pieces represents a type of character in a typical TTRPG style adventure where the King is a wizard, the bishop is a cleric, the Knight is a scout or thief and the Castle is a fighter</p><p>If you want to follow the TTRPG keep an eye on <href>mazechess.com</href></p><h2>What</h2><p><b>What</b>is Mazechess? Mazechess is a super simpler dungeon crawl challenge in which you simply need to move your chess piece (representing a dungeon crawling adventure) from A1 to H8 avoiding any obstacles</p><h2>Thanks</h2>Big thanks to the following:<ul><li>The mazechess team</li><li>Inkarnate.com (background tiles/images)</li></ul>";
const SPONSOR_TEXT = "<h2><Sponsors</h2><p>Thanks to our sponsors:...</p>";
const CONTACT_TEXT = "<h2>(first) Contact Us</h2><p>Keep an eye on the social media accounts:<UL><LI>Twitter:@mazechessgame</LI><LI>FB:@dungeonbard</LI></UL><p>For any inquiries, please email us at bardofthedungeon.com.</p>";
*/
const TEXT_CONSTANTS = {
    game: {
        text: "<p>Click START. Choose ♚ ♝ ♜ or ♞. Switch to another piece anytime during the game. Move from the bottom left to the top right in the fewest moves and must collect any gold (gold squares). Cannot move on blocked squares but Knights can jump over them.</p>"
    },
    help: {
        text: `
            <h2>Help and Rules</h2>
            <p>♚ Kings move one space any direction, ♜ Rooks (look like castles) move in cardinal directions (N,S,E and W), Bishops move diagonal, and ♞ Knights moves in an L shape: two squares in one direction, then one square sideways, and can jump over other pieces on the board.</p>
            <p>You can switch pieces any time. Avoid obstacles like rocks. If there is gold on the board (gold squares) you must land on each one before advancing to H8.</p>
            <p>Check out the training grounds and use the challenge rating to practice.</p>
            <h2>Additional Challenges</h2>
            <ul>
                <li>4 Corners: Visit all 4 corners of the board.</li>
                <li>Full House: All squares must be visited.</li>
                <li>Royal Flush: Use all 4 pieces (King, Knight, Bishop, Rook).</li>
                <li>Solo: Complete the challenge with only one piece.</li>
                <li>Two-Piece Tango: Use exactly two pieces</li>
                <li>Cornered King: Start at A1 with the King, end at H8, touching all four corners.</li>
                <li>Speed run - complete all three levels of the training grounds</li>
            </ul>`
    },
    about: {
        text: `
            <h2>About</h2>
             <h2>Why</h2>
            <p><b>Why</b> did we make this? We made this for our friends to play a quick and easy game and to have a little bit of chess and a little bit of a good old fashion dungeoncrawling.</p>
            <p><b>What</b> is Mazechess? It's a chess inspire3d dungeon crawl challenge where your chess piece represents a dungeon-crawling adventurer, moving from A1 to H8, collecting gold, while avoiding obstacles.</p>
            <h2>Thanks</h2>
            A massive thanks to the following:
            <ul>
                <li>The Mazechess Team</li>
                <li>Inkarnate.com (background tiles/images)</li>
            </ul>
            <h2>Contact</h2>
            <ul>
                <li>Twitter:    @mazechessgame</li>
                <li>Twitter:    @dungeonbard</li>
                <li>Mastodon:   @dungeonbard</li>
                <li>Bluesky:    @dungeonbard</li>
                <li>Reddit:     /r/mazechess</li>
                <li>Tiktok:      @mazechess</li>
            </ul>
            
            <p>For inquiries, email us at bardofthedungeon.com.</p>

            <h2>We need you</h2>
            <p>We need your help and support to get the word out about Mazechess.</p>
            <ul>
                <li>Share the link with friends.</li>
                <li>Use the Clipboard button and send an image or tag #mazechess on social media.</li>
            </ul>
            `
    },
    sponsor: {
        text: `<h2>Sponsors</h2>
               <p>Thanks to our sponsors:...</p>`
    },
    settings: {
        text: `
            <div class="settings">
            <h2>Settings</h2>
            <label for="username">Name</label>
            <input type="text" id="userNameInput" name="username" placeholder="Enter your username">
            <button onclick="generateRandomUsername()">Rnd</button>
            <button onclick="saveUsername()">Save</button>
            </div>`
    }
};
