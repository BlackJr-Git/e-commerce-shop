import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input className='bg-white' type="email" placeholder="votre mail" />
      <Button type="submit">S'abonner</Button>
    </div>
  )
}

export default InputWithButton ; 