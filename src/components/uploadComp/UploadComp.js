import { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { AppContext } from "../../contexrStore/Store";

import "./UploadComp.css";

const fileTypes = ["JPEG", "PNG", "GIF"];

export default function UploadComp() {
    const [file, setFile] = useState({});

    const { appState, applyAction } = useContext(AppContext);

    const handleChange = (file) => {
        let imageName = file[0].name;
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (event) => {
            let Layers = appState.layers;
            let Layerindex;

            const newLayers = Layers?.map((layer, ind) => {
                if (layer.name === appState.selectedLayer) {
                    Layerindex = ind;
                }
            });

            let images = Layers[Layerindex].images;
            images.push({ imageName: imageName, _d: event.target.result });
            Layers[Layerindex].images = images;
            applyAction("add-layer", Layers);
        };
    };

    useEffect(() => {

        return () => applyAction("discard-generate-nft");
    }, []);
    return (
        <div>
            {appState.selectedLayer !== "" && (
                <div>
                    <div>

                    </div>
                    <FileUploader multiple={true} handleChange={handleChange} name="file" types={fileTypes} />
                </div>
            )}
            {/* <img src={file?.srcElement.result}></img> */}
        </div>
    );
}
