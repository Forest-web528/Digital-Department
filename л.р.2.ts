//Вариант №4.

//Задание 1
//Одномерные массивы:
function returnMedian(arr: number[]): number {
    if (arr.length === 0) throw new Error("Массив не может быть пустым");
  
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
  
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }
  
  const arr = [5, 1, 9, 3, 7];
  console.log(returnMedian(arr));
  
//Двумерные массивы:
function countNonZeroInRange(matrix: number[][], min: number, max: number): number {
    let count = 0;
  
    for (const row of matrix) {
      for (const value of row) {
        if (value !== 0 && value >= min && value <= max) count++;
      }
    }
  
    return count;
  }
  
const matrix = [
    [1, 0, 5],
    [3, 0, 2],
    [0, 4, 6],
    ];
console.log(countNonZeroInRange(matrix, 2, 5));
  

//Задание 2
type NumericTuple = [number, string, number];

function multiply(tuple: NumericTuple): number {
  return tuple[0] * tuple[2];
}

const myTuple: NumericTuple = [4, "строка", 5];
console.log(multiply(myTuple));


//Задание 3
enum Vitamins {
    A = "Витамин A",
    B3 = "Витамин B3",
    B6 = "Витамин B6",
    B12 = "Витамин B12",
    E = "Витамин E",
  }
  
console.log(Vitamins.B6);


//Задание 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
}

function PetInfo<T extends Pet>(pet: T): void{
    console.log("Name:", pet.name, "Age:", pet.age, "Speak:", pet.speak())
}

const dog = new Dog();
PetInfo(dog);


//Задание 5
enum VitaminType {
    A = "Витамин A",
    B3 = "Витамин B3",
    B6 = "Витамин B6",
    B12 = "Витамин B12",
    E = "Витамин E",
  }
  
type VitaminInfo = {
    type: VitaminType;
    dose: string;
    benefits: string[];
};
  
const vitamin: VitaminInfo = {
    type: VitaminType.B12,
    dose: "2,5 мкг",
    benefits: ["Профилактика сердечно-сосудистых заболеваний", "Для улучшения умственной активности"],
};
  
console.log(JSON.stringify(vitamin, null, 2));