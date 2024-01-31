import React, { useMemo, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useHookstate } from "@hookstate/core";
import { useShowLoader } from "@/hooks/use-showloader";

export default function SpinnerLoader() {
  let [isOpen, setIsOpen] = useState<boolean>(true);
  const loaderState = useHookstate(useShowLoader());

  useMemo(() => {
    if (!loaderState.showLoader?.value) {
      closeModal();
      return;
    }
    setIsOpen(loaderState.showLoader?.value);
  }, [loaderState.showLoader?.value]);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="div" className="grid place-items-center">
                    <div className="loader bg-white p-5 rounded-full flex space-x-3">
                      <div className="w-5 h-5 bg-black rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-black rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-black rounded-full animate-bounce"></div>
                    </div>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
