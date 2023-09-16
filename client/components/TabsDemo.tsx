"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
    return (<>
    <Tabs defaultValue="account" className="w-full">
  <TabsList className="w-full bg-primary">
    <TabsTrigger value="relationship">Relationship Goals</TabsTrigger>
    <TabsTrigger value="health">Health Goals</TabsTrigger>
    <TabsTrigger value="financial">Financial Goals</TabsTrigger>
  </TabsList>
  <TabsContent value="relationship">Make changes to your account here.</TabsContent>
  <TabsContent value="health">Change your password here.</TabsContent>
  <TabsContent value="financial">Change your password here.</TabsContent>
</Tabs>
</>)
}
