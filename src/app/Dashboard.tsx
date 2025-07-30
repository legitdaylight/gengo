import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import TopBar from './Components/TopBar'

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <p>Dasboard</p>
    </div>
  )
}

export default Dashboard