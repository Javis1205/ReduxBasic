export function ThayDoi(DATA){
  return {
    type: "THAYDOI",
    payload: DATA
  }
}
export function CongThem(DATA){
    return{
        type: "CONGTHEM",
        payload: DATA + 1
    }
}