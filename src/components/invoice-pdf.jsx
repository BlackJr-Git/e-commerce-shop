import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Link,
    Font,
  } from "@react-pdf/renderer";

function InvoicePDF() {
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      {/* <Html>{html}</Html> */}
      <View style={styles.section}>
        <Image src="/logo.JPG" />
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <View style={styles.section}>
        <Link src="#page1">Page 1</Link>
        <Link src="#page2">Page 2</Link>
      </View>
    </Page>
    <Page id="page1" size="A4" style={styles.page}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <View style={styles.section}>
        <Text>
          You disposal strongly quitting his endeavor two settling him. Manners
          ham him hearted hundred expense. Get open game him what hour more
        </Text>
      </View>
    </Page>
    <Page id="page2" size="A4" style={styles.page}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <View style={styles.section}>
        <Text>
          Started earnest brother believe an exposed so. Me he believing
          daughters if forfeited at furniture. Age again and stuff downs spoke.
          Late hour new nay able fat each sell. Nor themselves age introduced
          frequently use unsatiable devonshire get. They why quit gay cold rose
          deal park. One same they four did ask busy. Reserved opinions fat him
          nay position. Breakfast as zealously incommode do agreeable furniture.
          One too nay led fanny allow plate.
        </Text>
      </View>
    </Page>
  </Document>
  )
}

export default InvoicePDF


const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#fff",
      fontFamily: "SpaceGrotesk",
    },
    section: {
      flexGrow: 1,
      fontSize: 12,
      lineHeight: 1.5,
      padding: 30,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      paddingVertical: 40,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "#fff",
      backgroundColor: "red",
    },
  });