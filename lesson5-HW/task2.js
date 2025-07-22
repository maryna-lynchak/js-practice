let averageGrade = 101;

switch (true) {
    case averageGrade < 60:
     console.log('Unsatisfactorily');
     break;

    case averageGrade <= 70:
     console.log('Satisfactorily');
     break;
    
    case averageGrade <= 80:
     console.log('Good');
     break;

    case averageGrade <= 90:
     console.log('Very good');
     break;

    case averageGrade <= 100:
     console.log('Perfectly');
     break;

     case averageGrade > 100:
     console.log('Your rating is wrong');
     break;
}