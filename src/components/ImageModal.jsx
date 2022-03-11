import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
  DialogOverlay,
} from "solid-headless";
import { createSignal } from "solid-js";

export default function ImageModal(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button type="button" onClick={openModal} class="w-auto">
        <img
          src={props.image}
          class="h-32 rounded-md hover:translate-y-1 duration-200 cursor-pointer"
        />
      </button>
      <Transition appear show={isOpen()}>
        <Dialog
          isOpen
          class="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div class="min-h-screen px-2 md:px-4 flex items-center justify-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogOverlay class="fixed inset-0 bg-black bg-opacity-80" />
            </TransitionChild>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              class="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel class="inline-block w-full max-w-md md:p-6 my-8 text-left align-middle transition-all transform">
                <div class="mb-4">
                  <button
                    type="button"
                    class="inline-flex justify-center p-2 text-sm font-medium bg-white rounded-full hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <img src={props.image} class="rounded-md " />
                {props.description && props.date && (
                  <div class="flex gap-2 items-center pt-2">
                    <span class="rounded-full px-2 py-1 font-bold bg-white">
                      <span class="bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 text-transparent">
                        {props.date}
                      </span>
                    </span>
                    <span class="text-white">{props.description}</span>
                  </div>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
