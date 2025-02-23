// import React from "react";

const loading = () => {
  return (
    <div className="h-full w-full flex mx-auto justify-center items-center">
      <span className="  loading w-24 loading-spinner text-warning">
        {" "}
        Loading .... {/* /* From Uiverse.io by devAaus */}
        <div class="flex-col gap-4 w-full flex items-center justify-center">
          <div class="w-20 h-20 border-4 border-transparent text-[#FAAC15] text-4xl animate-spin flex items-center justify-center border-t-[#FAAC15] rounded-full">
            <div class="w-16 h-16 border-4 border-transparent text-[#F97715] text-2xl animate-spin flex items-center justify-center border-t-[#F97715] rounded-full"></div>
          </div>
        </div>
      </span>
      {/* <div className="w-[150px] h-[150px] relative m-8 overflow-hidden">
      <div className="absolute w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent border-t-white rounded-full animate-spin duration-[5s] ease-[cubic-bezier(0.17,0.49,0.96,0.79)]">
        <div className="absolute w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent border-t-white rounded-full animate-spin duration-[5s] ease-[cubic-bezier(0.17,0.49,0.96,0.79)]">
          <div className="absolute w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent border-t-white rounded-full animate-spin duration-[5s] ease-[cubic-bezier(0.17,0.49,0.96,0.79)]">
            <div className="absolute w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent border-t-white rounded-full animate-spin duration-[5s] ease-[cubic-bezier(0.17,0.49,0.96,0.79)]">
              <div className="absolute w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent border-t-white rounded-full animate-spin duration-[5s] ease-[cubic-bezier(0.17,0.49,0.96,0.79)]">
                <div className="absolute w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent border-t-white rounded-full animate-spin duration-[5s] ease-[cubic-bezier(0.17,0.49,0.96,0.79)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default loading;
