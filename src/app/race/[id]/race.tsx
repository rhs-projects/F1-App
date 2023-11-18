import { FlatList,ActivityIndicator,Text } from 'react-native';
import React from 'react';
//import RaceRankingsResponse from '../../../../assets/data/race-rankings.json';
import RankingListItem from '../../../components/RankingListItem';
import { useGlobalSearchParams } from 'expo-router';
//const raceRankings = RaceRankingsResponse.data.raceRankings.response;
import { useQuery, gql } from '@apollo/client';

const query = gql`
query MyQuery($id: String) {
  raceRankings(race: $id) {
    response {
      position
      time
      team {
        name
        id
      }
      driver {
        id
        image
        name
      }
    }
  }
}
`

const RaceRankings = () => {
  const { id } = useGlobalSearchParams();
  const { data, loading} = useQuery(query, {variables: { id: String(id) }});

  //console.log(data);
  if(loading){
    return <ActivityIndicator/>
  }

  const raceRankings = data?.raceRankings?.response;

  if(!raceRankings){
    return <Text>Something went wrong!</Text>;
  }

  return (
    <FlatList 
      data={raceRankings}
      renderItem={({item}) => <RankingListItem item={item} />}
    />
  )
}

export default RaceRankings