import React, { ReactNode } from 'react'

const Box = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{ borderRadius: '20px', backgroundColor: '#fff', padding: '50px 70px', marginBottom: '20px', maxWidth: '1000px', margin: '0 auto', marginTop: '30px' }}>
            {children}
        </div>
    )
}

export default Box