import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const {loading, mainError} = state

  return (
    <div className="errorWrap">
      {mainError && <p className="error">{mainError}</p>}
    </div>
  )
}

export default FormStatus
