import { useState, type ChangeEvent } from "react";

import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

export default function Home() {
  const [clientValue, setClientValue] = useState<string>("");
  const [keyValue, setKeyValue] = useState<string>("");
  const [mangaValue, setmangaValue] = useState<string>("Reading");

  const handleKey = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyValue(event.target.value);
  };

  const handleClient = (event: ChangeEvent<HTMLInputElement>) => {
    setClientValue(event.target.value);
  };

  const getMangaList = () => {};

  const handleManga = (event: React.MouseEvent<HTMLButtonElement>) => {
    setmangaValue(event.currentTarget.textContent || "Null");
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/4 bg-secondary h-auto p-10 m-8">
          <div className="grid grid-flow-row grid-cols-1 gap-4">
            <label>
              Enter Mangadex Client Key:
              <input
                type="text"
                value={clientValue}
                onChange={handleClient}
                className="bg-white mx-2 rounded-2xl cursor p-2 w-2xl"
              />
            </label>
            <label>
              Enter Mangadex Secret Key:
              <input
                type="text"
                value={keyValue}
                onChange={handleKey}
                className="bg-white mx-2 rounded-2xl cursor p-2 w-2xl"
              />
            </label>
            <label className="flex">
              Select Type of List:
              <div className=" px-5">
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
                    {mangaValue}
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom start"
                    className="w-52 origin-top-right rounded-xl border border-white/5 bg-primary p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                  >
                    <MenuItem>
                      <button
                        onClick={handleManga}
                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                      >
                        Reading
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={handleManga}
                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                      >
                        Plan To Read
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={handleManga}
                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                      >
                        Completed
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={handleManga}
                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                      >
                        On-Hold
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={handleManga}
                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                      >
                        Dropped
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </label>
            <Button
              onClick={getMangaList}
              className="rounded w-fit bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"
            >
              Get Manga List
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
