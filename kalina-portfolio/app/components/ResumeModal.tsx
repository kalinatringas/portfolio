
type ResumeModalProps ={
    isOpen: boolean;
    onClose: () => void;
};


export default function ResumeModal({isOpen, onClose}: ResumeModalProps){
    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {/* The Modal Card Herself!! */}
            <div className="bg-white rounded-xl w-[90vw] h-[80vh] shadow-xl flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">Resume Preview</h1>
                    <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 text-xl w-6">
                        X
                    </button>
                </div>
                {/* PDF preview */}
                <div className="flex-1 overflow-hidden">
                    <iframe
                    src="/Resume.pdf"
                    className="w-full h-full"
                    title="Resume Preview"/>                    
                </div>
                <div className="flex justify-end gap-3 p-4 border-t">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border font-contl"
                    > Cancel </button>
                    <a
                    href="/Resume.pdf"
                    download="Kalina_Tringas_Resume.pdf"
                    className="px-4 py-2 rounded-lg font-contl bg-gray-500 text-white hover:bg-gray-600">
                        Download
                    </a>
                </div>
            </div>
        </div>
    )

}