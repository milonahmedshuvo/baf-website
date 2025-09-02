'use client'

import Button from "@/components/ui/Button";


export default function Home() {

  const onSubmit = () => {}

  return (
   <div>

     <p>App next.js </p>

     <Button children={'vateran'} size="medium" buttonEvent={onSubmit}/>

   </div>
  );
}
