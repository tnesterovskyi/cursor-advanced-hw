class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this.dismissed = false;
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this.dismissed ? null : this._marks;
    }

    set marks(mark) {
        if (!this.dismissed) {
            this._marks.push(mark);
        }
    }

    getAverageMark() {
        if (this.dismissed) {
            return null;
        }

        const sum = this._marks.reduce((acc, mark) => acc + mark, 0);
        const avg = sum / this._marks.length;
        return +avg.toFixed(1);
    }

    dismiss() {
        this.dismissed = true;
        this._marks = null;
    }

    recover() {
        this.dismissed = false;
        this._marks = [5, 4, 4, 5];
    }
}

const student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Бендер");

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
student.dismiss();
console.log(student.marks);
console.log(student.getAverageMark());
student.recover();
console.log(student.marks); 