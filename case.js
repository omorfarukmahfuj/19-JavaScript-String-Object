const book = '  Math';
const exam = 'math  ';

if (book.toLowerCase().trim() == exam.toLowerCase().trim()) {
  console.log('Passed');
} else {
  console.log('Failed');
}