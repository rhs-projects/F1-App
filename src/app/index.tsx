import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator, } from 'react-native';
// import racesResponse from '../../assets/data/races.json';
// const races = racesResponse.data.races.response;
import RaceListItem from '../components/RaceListItem';
import dayjs from 'dayjs';
import { Link, Stack } from "expo-router";
import { useQuery, gql } from '@apollo/client';

const query = gql`
query MyQuery($season: String, $type: String) {
  races(season: $season, type: $type) {
    response {
      id
      date
      season
      competition {
        name
        location {
          country
        }
      }
    }
  }
}
`;


export default function HomeScreen() {

  const { data, loading, error } = useQuery(query, {
    variables: { season: '2023', type: 'RACE' },
  });
  
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch Races. {error.message}</Text>;
  }
  
  //console.log(data);
  const races = [...data.races.response];

  const sortedRaces = races.sort((r1, r2) => dayjs(r2.date).diff(dayjs(r1.date)));
  
  return (
    <View style={styles.container}>
      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => 
        <RaceListItem item={item} round={sortedRaces.length - index} />}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 50,
    backgroundColor: 'whitesmoke',
  },
});
