import { useNavigate } from "react-router-dom";

export default function useRedirect(){
    const goTo = useNavigate()
    return {goTo}
}