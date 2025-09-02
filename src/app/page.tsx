'use client'

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";


export default function Home() {

  const onSubmit = () => {}

  return (
   <div>
     <p>App next.js </p>
     <Button children={'vateran'} size="medium" buttonEvent={onSubmit}/>
     <Text size="4xl" weight="extrabold" color="black" as="h1" >Bangladesh Athelices Foundation</Text>

   </div>
  );
}
