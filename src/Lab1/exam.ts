const student1:object = {
    id : 1,
    name : "Huy",
    email: "trinhdanghuy@gmail.com",
    isPremium : true,
    contact : {
        phone: "0123456789",
        address: "123 Main St"
    }
};
const student2:object = {
    id : 2,
    name : "Ngu",
    email: "ngu@gmail.com",
    isPremium : false,
    contact : {
        phone: "0123444789",
        address: "555 Main St"
    }
};

const course:object = {
    id: 101,
    title: "Introduction to TypeScript",
    price: 49.99,
    studentsEnrolled: [student1, student2]
};

const students: Array<object> = [student1, student2];

const registerStudenttoCourse = (student:object, course:object):void => {
    // @ts-ignore
    course.studentsEnrolled.push(student);
    console.log(`Student registered: ${(student as any).name} to course ${(course as any).title}`);
};

registerStudenttoCourse({
    id : 3,
    name : "An",
    email: "an@gmail.com",
    isPremium : true,
    contact : {
        phone: "0987654321",
        address: "789 Main St"
    }
}, course);

const printCourseInfo = (course:object):void => {
    // @ts-ignore
    console.log(`Course: ${(course as any).title}`);
    // @ts-ignore
    console.log(`Price: $${(course as any).price}`);
    // @ts-ignore
    console.log(`Students Enrolled: ${(course as any).studentsEnrolled.length}`);

    if ((course as any).studentsEnrolled.length > 0) {
        for (const student of (course as any).studentsEnrolled) {
            console.log(`- ${(student as any).name} (${(student as any).email})`);
        }
    } else {
        console.log("No students enrolled yet.");
    }
}

printCourseInfo(course);
