'use server'
import prisma from '@/lib/prisma';
import { time } from 'console';

export async function getTimer(){
   return  prisma.timer.findFirst();
}

export async function updateTimer(){
    const timer = await prisma.timer.findFirst();
    console.log("antes de entrar al if");
    if(timer){
        let newTime = timer.time + 1;
        console.log(newTime, "acá está el time del server");
        const updatedTimer = await prisma.timer.update({
            where: {id: timer.id},
            data: {time: newTime}
        });
        return updatedTimer.time ?? 0;
    }}