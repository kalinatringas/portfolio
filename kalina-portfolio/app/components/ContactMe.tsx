

type ModalProps = {
    isOpen: boolean;
    onClose: ()=> void;
}

export default function ContactModal({isOpen, onClose}: ModalProps){
      if (!isOpen) return null;
      return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {/* The Modal Card Herself!! */}
            <div className="bg-white rounded-xl w-[50vw] h-[50vh] shadow-xl flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">Contact Me</h1>
                    <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 text-xl w-5">
                        X
                    </button>
                </div>
                {/* PDF preview */}
                <div className="flex-1 p-2 overflow-hidden">
                    <h1 className="text-center text-2xl text-gray-700">Contact Info</h1>
                    <p className="text-xl p-2">Email: <a className="text-blue-500 hover:text-blue-600" href="mailto:kalinatringas@me.com">kalinatringas@me.com</a></p>            
                    <p className="text-xl p-2">LinkedIn: <a className="text-blue-500 hover:text-blue-600" href="https://www.linkedin.com/in/kalina-tringas/"> https://www.linkedin.com/in/kalina-tringas/</a></p>
                    <p className="p-2">I respond quickest to messages on LinkedIn! I'm always looking to work on new, cool projects so hit me up!</p>
                </div>
                <div className="flex justify-end gap-3 p-4 border-t">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border"
                    > Cancel </button>
                </div>
            </div>
        </div>
    )
}