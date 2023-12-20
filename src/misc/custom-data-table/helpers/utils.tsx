//A function that takes an array of objects and return a string of specific property of each object
export const createStringFromObjectArray = (
  array: any[],
  property: string,
  delimiter = ', ',
  max = 0
) => {
  let result = '';
  //Check if an array was passed
  if (!Array.isArray(array)) return result;

  let currentCount = 0;
  array.forEach((element: any) => {
    //Check if we have reached the max items we want to return
    if (max > 0 && currentCount >= max) return;
    if (element[property] !== undefined)
      result += element[property] + delimiter;
    currentCount++;
  });
  //Remove the last delimiter if it exists
  if (result.endsWith(delimiter))
    result = result.substring(0, result.length - delimiter.length);
  return result;
};

//Returns a string of the first letter of each word in a string as uppercase
export const getInitials = (first: string, last?: string | undefined) => {
  //if last name is not provided, split the first name by space and return the first letter of each word
  if (!last)
    return first
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase())
      .join('');
  //otherwise, return the first letter of the first name and the first letter of the last name
  return (first.charAt(0) + (last ? last.charAt(0) : '')).toUpperCase();
};

//A function that takes an array of objects and return an array of strings from a specific property of each object
export const createStringArrayFromObjectArray = (
  array: any[],
  property: string,
  max = 0
) => {
  /**
   * @returns an array of strings of the property of each object in the array
   * @param array - the array of objects
   * @param property - the property of each object to return
   * @param max - the max number of items to return, defaults to 0 (all)
   */

  const result: string[] = [];
  //Check if an array was passed
  if (!Array.isArray(array)) return result;

  let currentCount = 0;
  array.forEach((element: any) => {
    //Check if we have reached the max items we want to return
    if (max > 0 && currentCount >= max) return;
    if (element[property] !== undefined) result.push(element[property]);
    currentCount++;
  });
  return result;
};
