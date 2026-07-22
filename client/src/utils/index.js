//Getting Year,Month, and Day
export const formatDate = (data) => {
  const year = data.getFullYear();
  const month = data.toLocaleString("en-US", { month: "short" });
  const day = data.getDate();
  return `${day}-${month}-${year}`;
};
// Converting valid date strings into a YYYY-MM-DD
export function dateFormatter(dateString) {
  const inputDate = new Date(dateString);
  if (isNaN(inputDate)) {
    return "Invalid Date";
  }
  const year = inputDate.getFullYear();
  const month = inputDate.toLocaleString("en-US", { month: "2-digit" });
  const day = inputDate.toLocaleString("en-US", { day: "2-digit" });
  return `${year}-${month}-${day}`;
}
//Getting Initials
export function getInitials(fullName) {
  if (!fullName) return "";
  const names = fullName.trim().split(/[ ]+/);
  const initials = names.slice(0,2).map((name) => name.charAt(0).toUpperCase());
  return initials.join("");
}
// Color mapping for task priority levels.
export const PRIORITY_STYLES={
    high:"text-red-600",
    medium:"text-yellow-600",
    low:"text-blue-600",
}
//task type
export const TASK_TYPE={
    todo:"bg-blue-600",
    "in progress": "bg-yellow-600",
    completed:"bg-green-600",
}
export const BGS=[
    "bg-blue-600","bg-yellow-600","bg-red-600","bg-green-600"
]