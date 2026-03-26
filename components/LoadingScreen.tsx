"use client"

import { RootState } from '@/redux/store'
import { LinearProgress } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

export default function LoadingScreen() {
    const loadingScreenOpen = useSelector((state: RootState) => state.loading.loadingScreenOpen)

    return (
        <div className={`fixed top-0 left-0 bottom-0 right-0 bg-white z-50 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${loadingScreenOpen ? "opacity-100 z-50" : "opacity-0 -z-50"}`}>
            < div className="flex flex-col items-center" >
                <Image
                    src={'/assets/pulse.png'}
                    width={120}
                    height={120}
                    alt="Pulse Logo"
                    className="mb-5"
                />
                <h1 className="text-6xl font-bold mb-10">
                    Pulse <span className="text-[#511CC2]">
                        App
                    </span>
                </h1>
                <LinearProgress color="secondary" sx={{
                    width: 265,
                    height: 10,
                    backgroundColor: "#511CC2",
                }} />
            </div >

        </div >
    )
}
