import H1 from "./H1"
import RoadmapPhase from "./RoadmapPhases"
export default function Roadmap (){
    return (
        <div className='2xl:px-[300px] lg:px-[160px] px-[20px]  flex flex-col mt-[300px] z-10 relative space-y-20' id="Roadmap">
          <H1 title="ROADMAP & UTILITY"></H1>
          <RoadmapPhase title="Phase 1 - Preparing for battle" 
                        text='4600 Spartans will be invade the Solana blockchain.
                        We’ll be allocating a proportion of the mint to the spartan treasury allowing us to raid other blue chip NFTs. 
                        Secondary sales royalties will be redistributed to the treasury and 1:1 rare items will be airdropped to our holders post mint. 
                        We will also be giving 2% of our mint to charities chosen by our DAO.'
                        img="Helmet.svg">
            </RoadmapPhase>
            <RoadmapPhase current title="Phase 2 - The war" 
                        text='Once the Spartans have claimed victory over the Solana ecosystem their sights will be set on the inter-blockchain war to come. 
                              We will be minting another army of warriors, The Persians, competitions being held between the two factions, the spoils of war will be great!'
                        img="Battle.png">
            </RoadmapPhase>
            <RoadmapPhase title="Phase 3 - The Great Beyond" 
                        text='Phase 3 will be focused solely on turning this into a revolutionary strategy P2E/PVP game. 
                        Providing a high-quality gaming experience whilst also supporting our ecosystem via a tokenomic framework. 
                        Players will utilise tactics and co-operation to command their army to victory in real time. 
                        NFTs will be used to rule a province and to compete against each other, with the ability to join other players to form joint Kingdoms.'
                        img="Tower.svg">
            </RoadmapPhase>
        </div>
    )
}