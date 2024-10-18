export function handleError(error: any) {
  return { error: error.message, status: error.status };
}
