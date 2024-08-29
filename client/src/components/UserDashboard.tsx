import React from "react";

const UserDashboard = () => {
  return (
    <>
      <main className="overflow-y-scroll h-screen">
        <section className="flex flex-wrap flex-col justify-center items-center mt-10">
          <img
            className="w-24 h-24 rounded-full"
            src="https://avatars.githubusercontent.com/u/82640789?s=400&u=b3a861a9ecd3bf9a3be5cb8e7b8318f35f170c6a&v=4"
            alt="Rounded avatar"
          />
          <div className="flex flex-col mt-4">
            <h1 className="text-2xl font-bold text-center">Nikku.Dev</h1>
            <p className="text-blue-400 text-center">
              ✅ Full Stack Developer ✅ Frontend Development ✅ Backend
              Development ✅ Blockchain Developer ✅ Integration Web2 to Web3 /
              Wallet Integration ✅ Smart contract Dev
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col w-full p-4">
              <h1 className="mb-4 text-2xl font-bold text-gray-900">Profile</h1>
              <div
                id="profile-progress"
                className="w-52 h-52 px-10 font-bold mb-8 m-auto grid place-items-center text-4xl font-bold"
              >
                75%
              </div>
              <div className="font-bold text-center text-gray-200 mb-10">
                Invested 75% of your Locked Money
              </div>
            </div>
          </div>
          <div className="w-[100%]">
      
              <div className="mx-auto mt-2 w-full px-2 mb-10">
                <div className="mt-6 w-full rounded-xl shadow p-5">
                  <table className="">
                    <thead className=" border-b lg:table-header-group">
                      <tr className="">
                        <td
                            width="80%"
                          className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6"
                        >
                          Transaction
                        </td>

                        <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-6">
                          Status
                        </td>
                      </tr>
                    </thead>

                    <tbody className="lg:border-gray-300">
                      <tr className="">
                        <td className="whitespace-no-wrap  py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
                          07 February, 2022
                        </td>
                        <td className="whitespace-no-wrap  py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
                          <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                            Claim
                          </div>
                        </td>
                      </tr>

                      <tr className="">
                        <td className="whitespace-no-wrap  py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
                          09 January, 2022
                        </td>

                        <td className="whitespace-no-wrap  py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
                          <div className="inline-flex items-center rounded-full bg-red-200 py-1 px-2 text-red-500">
                            Claimed
                          </div>
                        </td>
                      </tr>

                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
      
        </section>
      </main>
    </>
  );
};

export default UserDashboard;
