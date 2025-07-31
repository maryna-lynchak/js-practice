function divide (numerator, denominator) {
    if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }
   if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Один з параметрів не є числом");
   }  
    return numerator / denominator;
}

try {
  console.log(divide(10, 2)); 
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(10, 0)); 
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide("abc", 4)); 
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена");
}
