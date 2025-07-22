/**
 * Unsatisfactorily  0 - 60
 * Satisfactorily  60 - 70
 * Good 71 - 80
 * Very good 81 - 90
 * Perfectly 91 - 100
 */


let averageGrade = 101;
let rating = '';
if (averageGrade < 60) {
rating = 'Unsatisfactorily';
} else if (averageGrade >= 60 && averageGrade <= 70) {
rating = 'Satisfactorily';
} else if (averageGrade >= 71 && averageGrade <= 80) {
rating = 'Good';
} else if (averageGrade >= 81 && averageGrade <= 90) {
rating = 'Very good';
} else if (averageGrade >= 91 && averageGrade <= 100) {
rating = 'Perfectly';
} else {
    rating = 'Your rating is wrong';
}

console.log(rating);