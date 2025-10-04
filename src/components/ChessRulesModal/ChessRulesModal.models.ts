export type SectionKey =
  | 'general'
  | 'pawn'
  | 'knight'
  | 'bishop'
  | 'rook'
  | 'queen'
  | 'king'
  | 'castling'
  | 'special';

interface Section {
  key: SectionKey;
  title: string;
  content: string[];
}

export const sections: Section[] = [
  {
    key: 'general',
    title: 'General Info',
    content: [
      'Chess is a two-player strategy board game played on a checkered board with 64 squares...'
    ]
  },
  {
    key: 'pawn',
    title: 'Pawn',
    content: ['Pawns move forward one square, but capture diagonally...']
  },
  {
    key: 'knight',
    title: 'Knight',
    content: [
      "Knights move in an 'L' shape: two squares in one direction and then one square perpendicular..."
    ]
  },
  { key: 'bishop', title: 'Bishop', content: ['Bishops move diagonally any number of squares...'] },
  {
    key: 'rook',
    title: 'Rook',
    content: ['Rooks move horizontally or vertically any number of squares...']
  },
  {
    key: 'queen',
    title: 'Queen',
    content: ['The queen combines the power of the rook and bishop...']
  },
  { key: 'king', title: 'King', content: ['The king moves one square in any direction...'] },
  {
    key: 'castling',
    title: 'Castling',
    content: ['Castling is a special move to protect the king and develop the rook...']
  },
  {
    key: 'special',
    title: 'Special Moves',
    content: ['En passant and pawn promotion are special moves in chess...']
  }
];
