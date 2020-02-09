export const formatCategoryName = (name) => {
  return (name.charAt(0).toUpperCase() + name.slice(1)).replace(/_/g,' ');
}
