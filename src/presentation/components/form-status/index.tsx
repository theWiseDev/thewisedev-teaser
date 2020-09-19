import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const {mainError, success} = state

  return (
    <>
      {mainError &&
        <div className="errorWrap">
          <p className="error">{mainError}</p>
        </div>
      }
      {success &&
        <div className="successWrap">
          <p className="successMessage">{success}</p>
        </div>
      }
    </>
  )
}

export default FormStatus
