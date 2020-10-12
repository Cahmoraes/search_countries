import React, { forwardRef, useState, useCallback, useImperativeHandle } from 'react'

export interface ModalHandles {
  openModal(): void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = ({ children }, ref) => {

  const [visible, setVisible] = useState(false)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  return (
    <>
      {visible && <button onClick={closeModal}>Close Modal</button>}
    </>
  )
}

export default forwardRef(Modal)