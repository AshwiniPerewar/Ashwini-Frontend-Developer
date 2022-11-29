import React from "react";

export default function Popup(props) {
  console.log(props.data)
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <button
      className="bg-black text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => setShowModal(true)}
    >
      View Details
    </button>
    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="rprops.dataative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg rprops.dataative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-black text-3xl font-semibold">
                  {props.data.capsule_id}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="rprops.dataative p-4 flex-auto">
              <img class="w-full h-40" src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/05/1000-13-1590457037.jpeg" alt="Capsules"/>
            
              <h6 class={(props.data.status==="active" &&  "text-green-600  text-2xl") || ((props.data.status==="retired" || props.data.status==="destroyed") && "text-red-600 text-2xl") || (props.data.status==="unknown" && "text-blue-600 text-2xl")}>
              status:{props.data.status}
            </h6>
            
            <h6 class="text-gray-700 text-base">
            Capsule serial : {props.data.capsule_serial}
            </h6>
            <h6 class="text-gray-700 text-base">
            Details : {props.data.details}
            </h6>
            
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-3 py-0 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
    </>
  );
}