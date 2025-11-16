import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessPawn,
  FaChessQueen,
  FaChessRook
} from 'react-icons/fa';

export type SectionKey =
  | 'general'
  | 'pawn'
  | 'knight'
  | 'bishop'
  | 'rook'
  | 'queen'
  | 'king'
  | 'castling'
  | 'pawn-promotion'
  | 'en-passant';

interface Section {
  key: SectionKey;
  icons?: React.ReactNode[];
  title: string;
  content: string[];
}

export const sections: Section[] = [
  {
    key: 'general',
    title: 'General Info',
    content: [
      'Chess is a two-player strategy board game with a rich history spanning over a thousand years. It is played on an 8x8 square board, alternating between light and dark squares, with each player controlling 16 pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. The game’s objective is to checkmate the opponent’s king, which means putting the king under direct attack in such a way that it cannot escape capture.',
      'The game begins with a standardized setup, with each piece occupying specific starting squares. Each type of piece has its own movement rules and strategic value, from the pawns’ gradual advance to the queen’s versatile long-range mobility. Players take turns moving one piece at a time, aiming to control key squares, develop their pieces efficiently, and create threats against the opponent while maintaining the safety of their own king.',
      'Chess involves both tactical and strategic thinking. Tactics focus on short-term maneuvers, such as capturing pieces, delivering checks, and creating combinations that gain material or positional advantage. Strategy addresses long-term planning, including controlling the center of the board, maintaining pawn structure, activating pieces, and preparing for the endgame. Players must constantly balance offense and defense, weighing the risks and rewards of each move.',
      'The game progresses through three main phases: the opening, where players develop pieces and establish control over the center; the middlegame, where combinations, attacks, and positional maneuvering dominate; and the endgame, where fewer pieces remain and pawn promotion, king activity, and precise calculation often determine the outcome. Chess is celebrated for its depth, creativity, and complexity, offering endless possibilities and challenges that reward careful planning, foresight, and adaptability.',
      'Overall, chess is a game of both skill and imagination, combining logical reasoning, tactical awareness, and strategic planning. Its universal appeal lies in the balance of creativity and calculation, making it a timeless test of intelligence and strategic thinking.'
    ]
  },
  {
    key: 'pawn',
    icons: [<FaChessPawn key={1} />],
    title: 'Pawn',
    content: [
      'The pawn is the most numerous and basic piece in chess, with each player starting the game with eight pawns. White pawns are positioned on the second rank, while Black pawns are on the seventh rank. Despite being simple in appearance, pawns play a fundamental role in the game by controlling space and supporting stronger pieces.',
      'Pawns move forward one square at a time, but on their first move, they have the option to advance two squares. They cannot move backward or sideways, which makes their movement unique among chess pieces. When it comes to capturing, pawns take opponent pieces diagonally, one square forward to the left or right, and they cannot capture pieces directly in front of them.',
      'Strategically, pawns are valued as minor pieces, usually assigned one point, but their importance often extends beyond simple material value. They help control the center of the board, protect more powerful pieces, and form structures such as pawn chains, which can strengthen a player’s position. The arrangement and advancement of pawns, known as pawn structure, can greatly influence the overall strategy, as it can create weaknesses like isolated or doubled pawns or open lines for rooks, bishops, and the queen.',
      'Pawns are essential for both defense and offense, shaping the flow of the game by controlling key squares and creating pathways for other pieces to operate effectively. Their slow but deliberate movement encourages careful planning, making them vital despite their seemingly modest abilities.'
    ]
  },
  {
    key: 'knight',
    icons: [<FaChessKnight key={1} />],
    title: 'Knight',
    content: [
      'The knight is a unique and versatile piece in chess, with each player starting the game with two knights. White knights are initially placed on the b1 and g1 squares, while Black knights occupy b8 and g8. Unlike most other pieces, the knight moves in an “L-shape,” which consists of moving two squares in one direction—either vertically or horizontally—and then one square perpendicular to that direction. This distinctive movement allows the knight to jump over other pieces, making it the only piece in chess that can bypass obstacles on the board.',
      'Knights capture enemy pieces by landing on the square occupied by the opponent, following the same L-shaped movement. Because of their jumping ability, knights are particularly effective in closed positions where pawns block long-range pieces like bishops, rooks, or the queen. Knights are considered minor pieces and are usually valued at three points, but their tactical potential often exceeds their material value due to their unusual movement and ability to create forks—attacking two or more pieces simultaneously.',
      'Strategically, knights excel in controlling the center of the board and can dominate outposts—squares protected by pawns where a knight cannot be easily attacked. Their ability to threaten multiple squares and jump over obstacles makes them excellent for launching attacks, defending key points, and creating tactical threats. While slower to traverse long distances compared to bishops or rooks, knights can quickly change the dynamics of the game with clever positioning and coordinated attacks.',
      'Overall, the knight’s combination of unique movement, tactical potential, and flexibility makes it a critical piece for both offense and defense, capable of influencing the game in ways that few other pieces can.'
    ]
  },
  {
    key: 'bishop',
    icons: [<FaChessBishop key={1} />],
    title: 'Bishop',
    content: [
      'The bishop is a long-range piece in chess, with each player starting the game with two bishops. White bishops begin on c1 and f1, while Black bishops start on c8 and f8. Bishops move diagonally across the board for any number of squares, as long as their path is not blocked by other pieces. Each bishop is confined to squares of a single color—either light or dark—throughout the game, which gives rise to the strategic concept of controlling squares of a specific color.',
      'Bishops capture enemy pieces by moving to the square occupied by the opponent, following the same diagonal path. Their long-range movement allows them to exert influence over both the center and the flanks, making them especially powerful in open positions where pawns and other pieces do not obstruct their path. Bishops are considered minor pieces and are usually valued at three points, but their value increases with mobility and activity on open diagonals.',
      'Strategically, bishops are often used to control key diagonals, support pawn structures, and coordinate attacks with other pieces, particularly queens and rooks. Because each bishop only operates on one color, players often aim to develop both bishops early to cover complementary squares and maximize board control. Bishops can also be instrumental in endgames, where their long-range capabilities allow them to dominate open lines and restrict the movement of the opponent’s pieces.',
      'Overall, the bishop’s diagonal movement, range, and ability to influence both attack and defense make it a versatile and essential piece in chess strategy. Its effectiveness depends heavily on position, coordination, and the pawn structure surrounding it.'
    ]
  },
  {
    key: 'rook',
    icons: [<FaChessRook key={1} />],
    title: 'Rook',
    content: [
      'The rook is a powerful long-range piece in chess, with each player starting the game with two rooks. White rooks are placed on a1 and h1, while Black rooks occupy a8 and h8. The rook moves any number of squares horizontally or vertically, as long as its path is not blocked by other pieces. This ability to traverse ranks and files makes the rook an important piece for controlling open lines and supporting other pieces.',
      'Rooks capture enemy pieces by moving to the square occupied by the opponent, following their horizontal or vertical path. Their long-range movement allows them to dominate open files and ranks, making them particularly effective in both offensive and defensive strategies. Rooks are considered major pieces and are usually valued at five points, reflecting their strength and versatility on the board.',
      'Strategically, rooks are often used to control open lines, support pawn advances, and coordinate with other pieces to create threats or pressure on the opponent’s position. They are especially effective in the endgame, where their ability to move across the board quickly can restrict the opponent’s king and pawns. Properly positioned rooks can control large areas of the board, dominate open files, and work together to create tactical opportunities.',
      'Overall, the rook’s combination of range, power, and flexibility makes it one of the most important pieces in chess. Its strength lies in its ability to dominate open lines, coordinate with other pieces, and exert control over key areas of the board.'
    ]
  },
  {
    key: 'queen',
    icons: [<FaChessQueen key={1} />],
    title: 'Queen',
    content: [
      'The queen is the most powerful piece in chess, with each player starting the game with one queen. White’s queen begins on d1, and Black’s queen starts on d8. The queen combines the movement abilities of both the rook and the bishop, allowing it to move any number of squares horizontally, vertically, or diagonally, as long as its path is not blocked by other pieces. This combination of range and flexibility makes the queen extremely versatile and capable of influencing almost any part of the board.',
      'The queen captures enemy pieces by moving to the square occupied by the opponent, following its allowed horizontal, vertical, or diagonal paths. Its long-range capabilities make it a formidable attacking piece, able to threaten multiple targets at once and coordinate with other pieces to create tactical opportunities. The queen is considered a major piece and is usually valued at nine points, reflecting its exceptional strength and importance in both middle and endgame play.',
      'Strategically, the queen is often used to control key squares, support attacks, and dominate open lines. Because of its power, players must carefully balance its activity with safety, as losing the queen early can severely weaken one’s position. In combination with rooks, bishops, and knights, the queen can create devastating threats, deliver checks, and help coordinate checkmates.',
      'Overall, the queen’s unparalleled range, flexibility, and attacking potential make it the central piece in most strategic and tactical plans. Its effectiveness depends on positioning, coordination with other pieces, and careful management to maximize its influence while minimizing risk.'
    ]
  },
  {
    key: 'king',
    icons: [<FaChessKing key={1} />],
    title: 'King',
    content: [
      'The king is the most important piece in chess, with each player starting the game with one king. White’s king begins on e1, and Black’s king starts on e8. The king moves one square in any direction—horizontally, vertically, or diagonally—allowing it to step cautiously across the board. Despite its limited mobility compared to other pieces, the king’s safety is the primary concern in the game, as losing the king means losing the match.',
      'The king captures enemy pieces by moving to the square occupied by an opponent, following its standard one-square movement. Because of its slow movement, the king is often protected by pawns and other pieces during the opening and middle game. However, as the game progresses into the endgame, the king becomes an active and crucial attacking and defensive piece, capable of supporting pawn promotion, controlling key squares, and restricting the opponent’s pieces.',
      'Strategically, the king must always avoid being placed in check while gradually improving its position when the board opens up. In the endgame, its proximity to pawns and ability to occupy central or advanced squares can make the difference between victory and defeat. Although not as strong in direct attack as the queen, rook, or bishop, the king’s careful positioning and coordination with other pieces are essential for both defense and the successful execution of endgame strategies.',
      'Overall, the king’s role in chess is unique: it is both the piece that must be protected at all costs and, in later stages of the game, a potent force capable of influencing the outcome through precise movement and support of other pieces.'
    ]
  },
  {
    key: 'castling',
    icons: [<FaChessRook key={1} />, <FaChessKing key={2} />],
    title: 'Castling',
    content: [
      'Castling is a special move in chess that involves both the king and one of the rooks, designed to improve king safety and connect the rooks. It is the only move in chess where a player moves two pieces in a single turn. Castling can be performed on either the kingside (short castling) or queenside (long castling). In kingside castling, the king moves two squares toward the rook on its right, and the rook jumps over the king to the square immediately next to it. In queenside castling, the king moves two squares toward the rook on its left, and that rook moves to the square immediately next to the king.',
      'Several conditions must be met to perform castling. Neither the king nor the rook involved may have moved previously during the game. The squares between the king and the rook must be unoccupied, and the king may not be in check, nor may it pass through or land on a square under attack by an enemy piece. These restrictions make castling a carefully timed strategic decision rather than a simple defensive maneuver.',
      'Strategically, castling serves two main purposes: it moves the king to a safer position away from the center of the board, where most attacks occur in the opening and early middlegame, and it connects the rooks, allowing them to support each other and control open or semi-open files. Castling also helps develop pieces efficiently, as it often brings rooks closer to central or active squares and allows for smoother coordination with other pieces.',
      'Overall, castling is a critical move for both defense and strategic positioning. It balances the need to safeguard the king with the goal of activating rooks, making it a cornerstone of sound opening play and overall game strategy.'
    ]
  },
  {
    key: 'pawn-promotion',
    icons: [<FaChessPawn key={1} />],
    title: 'Pawn promotion',
    content: [
      'Pawn promotion is a special rule in chess that occurs when a pawn reaches the opponent’s back rank—the eighth rank for White or the first rank for Black. Upon reaching this rank, the pawn must be promoted to another piece, which can be a queen, rook, bishop, or knight of the same color. The choice of piece is not limited by previously captured pieces, meaning a player can have multiple queens, rooks, bishops, or knights if desired.',
      'The most common promotion is to a queen, due to its combination of mobility and power, but under certain strategic circumstances, promoting to a knight, rook, or bishop can be more advantageous, especially for delivering checks, avoiding stalemate, or controlling specific squares. The promotion happens immediately as part of the pawn’s move, and the newly promoted piece takes its full powers on that square.',
      'Strategically, pawn promotion is a key goal in the endgame. Advancing pawns to promotion forces the opponent to defend against both the pawn and the threat of the new piece, often creating decisive advantages. It encourages careful planning of pawn structure, king activity, and coordination of pieces to either enable promotion or prevent the opponent from achieving it.',
      'Overall, pawn promotion transforms the seemingly weakest piece into one of the most powerful tools on the board, making it a critical element of chess strategy and endgame tactics.'
    ]
  },
  {
    key: 'en-passant',
    icons: [<FaChessPawn key={1} />],
    title: 'En passant',
    content: [
      'En passant is a special pawn capture in chess that occurs under very specific conditions. It can happen when a pawn moves two squares forward from its starting position, landing beside an opponent’s pawn. The opposing pawn is then allowed to capture it as if it had only moved one square forward, but this capture must be done immediately on the next move, or the opportunity is lost.',
      'This rule exists to prevent pawns from bypassing a square where they could otherwise be captured. When performing en passant, the capturing pawn moves diagonally to the square that the opposing pawn passed over, and the opponent’s pawn is removed from the board. The move follows the standard capturing mechanics for pawns, even though the captured pawn is not on the square the capturing pawn moves to.',
      'Strategically, en passant can be used to maintain pawn structure, open lines, or create weaknesses in the opponent’s position. It is a tactical tool that can sometimes dramatically change the dynamics of a game, especially in the opening and middlegame when pawn formations are still developing.',
      'Overall, en passant is a rare but important rule that preserves the balance and fairness of pawn movement, ensuring that pawns cannot evade capture by exploiting the two-square initial advance.'
    ]
  }
];
